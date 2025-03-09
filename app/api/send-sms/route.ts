import Coolsms from 'coolsms-node-sdk';

const messageService = new Coolsms(
  process.env.COOLSMS_API_KEY as string,
  process.env.COOLSMS_API_SECRET as string
);

export async function POST(request: Request) {
  const { phone, name } = await request.json();

  try {
    await messageService.sendOne({
      to: phone,
      from: process.env.COOLSMS_SENDER_NUMBER as string,
      text: `[제제이시스템] ${name}님의 문의가 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.`,
      autoTypeDetect: true
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false, error }, { status: 500 });
  }
} 