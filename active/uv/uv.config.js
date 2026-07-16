self.__uv$config = {
    // This allows the proxy to handle anything inside your project folder
    prefix: '/gh/zaka13alt/zakaproxy@main/active/go/',
    bare: 'https://tompbare-78.zaka.deno.net/api/b/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    
    // Core engine assets stay in the subfolder
    handler: '/gh/zaka13alt/zakaproxy@main/active/uv/uv.handler.js',
    bundle: '/gh/zaka13alt/zakaproxy@main/active/uv/uv.bundle.js',
    config: '/gh/zaka13alt/zakaproxy@main/active/uv/uv.config.js',
    
    // The Service Worker is now higher up, allowing it to control the /go/ prefix safely
    sw: '/gh/zaka13alt/zakaproxy@main/active/uv.sw.js',
};
