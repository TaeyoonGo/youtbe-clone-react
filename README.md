# YouTube 클론 React

React로 구축된 YouTube 클론 애플리케이션으로, 비디오 검색, 탐색 기능 및 반응형 디자인을 제공합니다.

## 주요 기능

- 🔍 비디오 검색 기능
- 📱 Tailwind CSS를 활용한 반응형 디자인
- ⚡ Vite를 통한 빠른 개발 환경
- 🎥 채널 정보가 포함된 비디오 카드 컴포넌트
- 📅 한국어 로케일을 지원하는 시간 포맷팅
- 🔄 React Query를 통한 상태 관리
- 🎯 YouTube API 연동

## 기술 스택

- **프론트엔드**: React 19, React Router
- **스타일링**: Tailwind CSS
- **빌드 도구**: Vite
- **상태 관리**: TanStack React Query
- **HTTP 클라이언트**: Axios
- **아이콘**: React Icons
- **날짜 포맷팅**: timeago.js

## 프로젝트 구조

```
src/
├── components/
│   ├── SearchHeader.jsx    # 검색 헤더 컴포넌트
│   ├── VideoCard.jsx       # 비디오 카드 표시
│   └── ChannelInfo.jsx     # 채널 정보
├── context/
│   └── YoutubeAPiContext.jsx # YouTube API 컨텍스트
├── Api/
│   ├── youtube.js          # YouTube API 클라이언트
│   ├── youtubeClient.js    # API 클라이언트 래퍼
│   └── fakeYoutubeClient.js # 테스트용 목 클라이언트
├── pages/
│   ├── Videos.jsx          # 메인 비디오 페이지
│   └── VideosDetail.jsx    # 비디오 상세 페이지
├── utils/
│   └── date.js             # 날짜 포맷팅 유틸리티
└── App.jsx                 # 메인 애플리케이션 컴포넌트
```

## 설치 방법

1. 저장소 클론:
```bash
git clone <repository-url>
cd youtbe-clone-react
```

2. 의존성 설치:
```bash
npm install
```

3. 루트 디렉토리에 `.env` 파일을 생성하고 YouTube API 키를 추가:
```env
VITE_YOUTUBE_API_KEY=your_api_key_here
```

## 사용 가능한 스크립트

- `npm run dev` - 개발 서버 시작
- `npm run build` - 프로덕션용 프로젝트 빌드
- `npm run preview` - 프로덕션 빌드 미리보기
- `npm run lint` - 코드 품질을 위한 ESLint 실행

## 개발 환경

개발 서버 시작:
```bash
npm run dev
```

애플리케이션은 `http://localhost:5173`에서 확인할 수 있습니다.

## API 연동

이 애플리케이션은 YouTube Data API v3를 사용합니다. 다음 단계를 따라주세요:
1. Google Cloud Console에서 API 키 발급
2. YouTube Data API v3 활성화
3. `.env` 파일에 API 키 추가


