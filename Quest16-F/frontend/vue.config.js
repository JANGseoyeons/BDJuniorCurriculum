const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 프록시 설정
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/api/',
        changeOrigin: true,
        // 요청 경로를 재작성하는데 사용하는 객체 ex) '/api/users'로 요청을 보내면 '/users' 경로로 요청
        pathRewrite: { '^/api': '' }
      }
    },
    // CORS(Cross-Origin Resource Sharing) 정책을 해결하기 위해 추가되는 응답 헤더
    headers: { 'Access-Control-Allow-Origin': '*' }
  }
})
