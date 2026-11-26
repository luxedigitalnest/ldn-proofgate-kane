# ProofGate — crypto submission evidence review

A standalone, local-first browser tool for structural review of crypto build evidence. Its purpose is to prevent a local simulation, failed transaction, missing receipt or mismatched explorer hash from being reported as a verified on-chain result. It does not authenticate receipts, access wallets, query networks, approve transactions or submit applications. All sample values are synthetic fixtures, not chain evidence.

## Run

Open index.html in a browser or serve this folder with python -m http.server 8000. Unit tests: node --test proofgate.test.js. Browser tests: python -m pip install playwright; python -m playwright install chromium; python browser_test.py. Set PLAYWRIGHT_CHROMIUM_EXECUTABLE only to an approved local browser binary when appropriate.

## Verification

Initial local JavaScript tests passed 14/14. Initial local Chromium navigation was blocked by administrator policy before UI assertions; no browser pass is claimed from that environment. The portable browser test and GitHub Actions workflow are provided for independent verification; consult actual CI output.

## KaneCLI competition readiness

New prototype created during the November 25–26 work session. The public demonstration is deployed at https://luxedigitalnest.github.io/ldn-proofgate-kane/ . Solo event registration is confirmed; the promotional Kane entitlement is not yet confirmed, and no actual KaneCLI run, published demo video, qualifying posts or final competition submission is claimed. The organizer requires a genuine Kane run, a public repository, 3–5 minute YouTube demo and at least two public posts. Use the official free-credit account process only with the owner's consent and applicable contest terms. A structural pass is not a certification of real evidence.

## Planned Kane verification flows (not executed)

1. Submit empty evidence; the page must block.
2. Enter a local-only environment and a public on-chain success claim; the page must block.
3. Remove the public claim and disclose local-only limitations; the page must show structure-only readiness.
4. Enter a transaction hash and mismatched explorer URL; the page must block. Correct the URL; verify readiness remains explicitly structure-only.
5. Return an actual Kane result to the coding agent; fix any genuine failure and rerun. Do not fabricate Kane output.

## Optional Kane runner

`node kane-plan.mjs` prints three synthetic-only objectives without running Kane or consuming credits. After installing the official CLI, authenticating through its supported OAuth flow, checking your free credit balance and accepting the applicable terms, use `node kane-plan.mjs --execute --confirm-owner-reviewed-free-credits` in an approved environment where the `kane-cli` executable is directly available in PATH. The runner serves only its own static fixture over loopback, passes documented arguments without a shell, stops on the first non-pass and stores output in an ignored local directory. The runner requires both a matching process exit code and a unique final structured `run_end` event (`passed` or `failed`), following [the official Agent Mode result contract](https://www.testmuai.com/docs/kane-cli-agent-mode). Missing, contradictory or duplicate terminal events fail closed. These checks do not prove receipt authenticity; review the real Kane evidence packs and logs before submitting. Do not commit credentials or raw evidence. No Kane execution has yet been demonstrated.

Official CLI reference: https://www.testmuai.com/docs/kane-cli-quickstart and https://github.com/LambdaTest/kane-cli .

Hosted CI at commit 6f85dbd9b6e8ee09270662bdb71c93f5a55b596f independently passed 14 unit and 6 browser checks: https://github.com/luxedigitalnest/ldn-proofgate-kane/actions/runs/45718782496 . This is ordinary Playwright/Node verification, not KaneCLI evidence.

## Latest verified ordinary checks (26 November)

The earlier opt-in runner at commit `a77a9981d17487d6559997735437fcad918d5b35` passed 18 Node tests and six browser checks. The stricter terminal-evidence parser subsequently passed **22 Node tests (0 failures) and all six browser checks** in [hosted CI run 45732068498](https://github.com/luxedigitalnest/ldn-proofgate-kane/actions/runs/45732068498), job `139616254127`. The change was merged in [PR #1](https://github.com/luxedigitalnest/ldn-proofgate-kane/pull/1). These are ordinary Node/Playwright checks; the actual Kane CLI run remains unverified. The deployed public page was separately exercised with synthetic empty, local-only, and mismatched/corrected explorer-hash examples. None of those checks establishes genuine KaneCLI execution or authentic on-chain activity. The contest deadline is 26 November 2026, 11:59 PM IST (18:29 UTC), according to [the organizer](https://www.kaneclihack.sh/). A final submission requires actual Kane verification, the video and two qualifying public posts; incomplete evidence must not be presented as eligible.
