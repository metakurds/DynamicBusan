exports.handler = async function(event, context) {
  // 환경변수에서 Client ID만 꺼내어 프론트엔드에 전달 (Secret은 절대 전달 안 함)
  return {
    statusCode: 200,
    body: JSON.stringify({ clientId: process.env.NAVER_CLIENT_ID })
  };
};