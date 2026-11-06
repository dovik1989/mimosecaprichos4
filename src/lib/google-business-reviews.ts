import type { VerifiedReviewCollection } from "@/components/sections/reviews/verifiedReviews";

const ratings: Record<string, 1 | 2 | 3 | 4 | 5> = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5 };

export function googleBusinessConfigured() {
  return ["GOOGLE_BUSINESS_CLIENT_ID", "GOOGLE_BUSINESS_CLIENT_SECRET", "GOOGLE_BUSINESS_REFRESH_TOKEN", "GOOGLE_BUSINESS_LOCATION"].every(key => Boolean(process.env[key]));
}

export async function fetchGoogleBusinessReviews(): Promise<VerifiedReviewCollection> {
  const location = process.env.GOOGLE_BUSINESS_LOCATION!;
  if (!/^accounts\/\d+\/locations\/\d+$/.test(location)) throw new Error("Invalid Google Business location resource");
  const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: process.env.GOOGLE_BUSINESS_CLIENT_ID!,
      client_secret: process.env.GOOGLE_BUSINESS_CLIENT_SECRET!,
      refresh_token: process.env.GOOGLE_BUSINESS_REFRESH_TOKEN!,
      grant_type: "refresh_token",
    }),
    cache: "no-store",
    signal: AbortSignal.timeout(5000),
  });
  if (!tokenResponse.ok) throw new Error(`Google authorization failed (${tokenResponse.status})`);
  const token = await tokenResponse.json();
  if (typeof token.access_token !== "string") throw new Error("Missing Google access token");
  const response = await fetch(`https://mybusiness.googleapis.com/v4/${location}/reviews?pageSize=50&orderBy=updateTime%20desc`, {
    headers: { Authorization: `Bearer ${token.access_token}` },
    cache: "no-store",
    signal: AbortSignal.timeout(5000),
  });
  if (!response.ok) throw new Error(`Google reviews request failed (${response.status})`);
  const data = await response.json();
  if (!Array.isArray(data.reviews) && data.totalReviewCount !== 0) throw new Error("Invalid Google reviews response");
  const checkedAt = new Date().toISOString();
  const reviews: VerifiedReviewCollection["reviews"] = [];
  for (const review of data.reviews ?? []) {
    const rating = ratings[review.starRating];
    if (!rating || typeof review.reviewId !== "string" || typeof review.comment !== "string" || !review.comment.trim() || typeof review.reviewer?.displayName !== "string") continue;
    reviews.push({
      id: review.reviewId,
      author: review.reviewer.displayName,
      text: review.comment,
      rating,
      publishedAt: typeof review.createTime === "string" ? review.createTime : undefined,
      source: "Google",
      verifiedAt: checkedAt,
      approvedByBusiness: false,
    });
    if (reviews.length === 15) break;
  }
  return {
    reviews,
    synchronized: true,
    summary: Number.isFinite(data.averageRating) && Number.isInteger(data.totalReviewCount)
      ? { averageRating: data.averageRating, totalReviews: data.totalReviewCount, checkedAt } : null,
    allReviewsUrl: null,
  };
}
