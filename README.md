# ProofGate — crypto submission evidence review

A standalone, local-first browser tool for structural review of crypto build evidence. Its purpose is to prevent a local simulation, failed transaction, missing receipt or mismatched explorer hash from being reported as a verified on-chain result. It does not authenticate receipts, access wallets, query networks, approve transactions or submit applications. All sample values are synthetic fixtures, not chain evidence.

## Run

Open index.html in a browser or serve this folder with python -m http.server 8000. Unit tests: node --test proofgate.test.js. Browser tests: python -m pip install playwright; python -m playwright install chromium; python browser_test.py. Set PLAYWRIGHT_CHROMIUM_EXECUTABLE only to an approved local browser binary when appropriate.

## Verification

Initial local JavaScript tests passed 14/14. Initial local Chromium navigation was blocked by administrator policy before UI assertions; no browser pass is claimed from that environment. The portable browser test and GitHub Actions workflow are provided for independent verification; consult actual CI output.

## KaneCLI competition readiness

New prototype created during the November 25–26 work session. No KaneCLI verification, registration, published video, posts or competition submission is claimed. The organizer requires a genuine Kane run, a public repository, 3–5 minute YouTube demo and at least two public posts. Use the official free-credit account process only with the owner's consent and applicable contest terms. A structural pass is not a certification of real evidence.

## Planned Kane verification flows (not executed)

1. Submit empty evidence; the page must block.
2. Enter a local-only environment and a public on-chain success claim; the page must block.
3. Remove the public claim and disclose local-only limitations; the page must show structure-only readiness.
4. Enter a transaction hash and mismatched explorer URL; the page must block. Correct the URL; verify readiness remains explicitly structure-only.
5. Return an actual Kane result to the coding agent; fix any genuine failure and rerun. Do not fabricate Kane output.
