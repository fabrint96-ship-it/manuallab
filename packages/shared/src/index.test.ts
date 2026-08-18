import { describe, expect, it } from 'vitest';

import { MANUALLAB_VERSION } from './index.js';

describe('@manuallab/shared', () => {
  it('exposes the current foundation version', () => {
    expect(MANUALLAB_VERSION).toBe('0.1.0');
  });
});
