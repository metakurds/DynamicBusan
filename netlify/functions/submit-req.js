exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' };

  const data = JSON.parse(event.body);
  const secretKey = process.env.NAVER_CLIENT_SECRET; // 서버 내부에서만 비밀키 사용 가능
  
  // 1. 여기서 수신된 데이터를 데이터베이스(Supabase, Firebase, MongoDB 등)에 저장합니다.
  // 2. data.requestDate 에 제보 일자가 포함되어 있습니다.
  // 3. 상태값을 'pending'(승인 대기)으로 저장합니다.
  
  console.log("새로운 식당 제보 수신:", data);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "제보가 성공적으로 백엔드에 저장되었습니다." })
  };
};