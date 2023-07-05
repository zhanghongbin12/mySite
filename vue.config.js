module.exports = {
    outputDir: 'docs',
    publicPath: './',
    pwa: { 
        name: 'xxx',
        themeColor: '#4DBA87',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            exclude: [/\.html$/],
            //html不进行service Worker缓存// 自定义 Service Worker 文件的位置
            swSrc: 'src/registerServiceWorker.js'
        }
    }

}