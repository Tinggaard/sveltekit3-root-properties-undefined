# SvelteKit 3 bug reproduction

```bash
git clone https://github.com/Tinggaard/sveltekit3-root-properties-undefined.git
cd sveltekit3-root-properties-undefined
pnpm install
pnpm dev
```

Now, navigate to [http://localhost:5173/path](http://localhost:5173/path), and observe the error thrown in the console.

The same error happens when building the project, and previewing it.

## Conditions

I've highlighted the different conditions that must be set for this bug to reproduce in the relevant files.

Namely in:
- `src/routes/(app)/+layout.svelte`
- `src/routes/(app)/path/+layout.svelte`

The bug happens only on initial load / page refresh.
It does not happen on navigation or dev server hot-reload.

### The error

```
Uncaught TypeError: can't access property "error", n() is undefined

  in <unknown>
  in +layout.svelte
  in root.svelte
  in undefined
    Error root.svelte:23
    update_reaction runtime.js:253
    execute_derived deriveds.js:368
    update_derived deriveds.js:391
    get runtime.js:691
    get onerror root.svelte:30
    error boundary.js:477
    invoke_error_boundary error-handling.js:72
    handle_error error-handling.js:47
    update_reaction runtime.js:314
    update_effect runtime.js:479
    flush_queued_effects batch.js:1121
    #process batch.js:444
    flush batch.js:677
    ensure batch.js:922
    run_all utils.js:47
    run_micro_tasks task.js:10
    queue_micro_task task.js:28
 root.svelte:23:26
    Error root.svelte:23
    update_reaction runtime.js:253
    execute_derived deriveds.js:368
    update_derived deriveds.js:391
    get runtime.js:691
    get onerror root.svelte:30
    error boundary.js:477
    invoke_error_boundary error-handling.js:72
    handle_error error-handling.js:47
    update_reaction runtime.js:314
    update_effect runtime.js:479
    flush_queued_effects batch.js:1121
    #process batch.js:444
    flush batch.js:677
    ensure batch.js:922
    run_all utils.js:47
    run_micro_tasks task.js:10
    queue_micro_task task.js:28
```
