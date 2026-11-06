const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
const source = ts.transpileModule(fs.readFileSync('src/lib/google-business-reviews.ts', 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
async function run() {
  const env = { GOOGLE_BUSINESS_CLIENT_ID: 'test-client', GOOGLE_BUSINESS_CLIENT_SECRET: 'test-secret', GOOGLE_BUSINESS_REFRESH_TOKEN: 'test-refresh', GOOGLE_BUSINESS_LOCATION: 'accounts/123/locations/456' };
  let requests = [];
  let failed = false;
  const exports = {};
  vm.runInNewContext(source, { exports, process: { env }, URLSearchParams, AbortSignal, fetch: async (url, options) => {
    requests.push({ url, options });
    if (failed) return { ok: false, status: 401 };
    return { ok: true, json: async () => url.includes('oauth2') ? { access_token: 'private-access-token' } : { averageRating: 4.8, totalReviewCount: 110, reviews: [
      { reviewId: 'one', starRating: 'TWO', reviewer: { displayName: 'Cliente' }, comment: '<b>Comentário original</b>', createTime: '2026-11-01T10:00:00Z' },
      { reviewId: 'empty', starRating: 'FIVE', reviewer: { displayName: 'Sem texto' } },
      { reviewId: 'invalid', starRating: 'UNSPECIFIED', comment: 'Inválido' },
    ] } };
  } });
  assert(exports.googleBusinessConfigured());
  const result = await exports.fetchGoogleBusinessReviews();
  assert.equal(result.reviews.length, 1);
  assert.equal(result.reviews[0].rating, 2);
  assert.equal(result.reviews[0].approvedByBusiness, false);
  assert.equal(result.reviews[0].text, '<b>Comentário original</b>');
  assert.equal(result.summary.totalReviews, 110);
  assert(result.synchronized);
  assert(!JSON.stringify(result).includes('private-access-token'));
  assert.equal(requests[1].options.headers.Authorization, 'Bearer private-access-token');
  failed = true;
  await assert.rejects(exports.fetchGoogleBusinessReviews(), /authorization failed/);
  const count = requests.length;
  env.GOOGLE_BUSINESS_LOCATION = '../../invalid';
  await assert.rejects(exports.fetchGoogleBusinessReviews(), /Invalid/);
  assert.equal(requests.length, count);
  delete env.GOOGLE_BUSINESS_REFRESH_TOKEN;
  assert(!exports.googleBusinessConfigured());
  console.log('PASS: OAuth refresh, mapping, all ratings, global summary, invalid data, secret isolation, authorization failure, location validation and missing credentials.');
}
run().catch(error => { console.error(error); process.exitCode = 1; });
