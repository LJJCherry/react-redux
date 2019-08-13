// Default to a dummy "batch" implementation that just runs the callback
// 默认的batch就是执行一下callback
function defaultNoopBatch(callback) {
  callback()
}

let batch = defaultNoopBatch

// Allow injecting another batching function later
// 允许注入另一个batch
export const setBatch = newBatch => (batch = newBatch)

// Supply a getter just to skip dealing with ESM bindings
export const getBatch = () => batch
