// src/global.d.ts
interface Crypto {
    readonly subtle: SubtleCrypto;
    getRandomValues<T extends ArrayBufferView | null>(array: T): T;
    randomUUID?(): string;
  }
  
  declare global {
    var crypto: Crypto;
  }