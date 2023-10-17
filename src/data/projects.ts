import accountNFT from "../assets/images/accountNFT.png";
import dibidibi from "../assets/images/dibidibi.png";
import fredericMalle from "../assets/images/fredericMalle.png";
import lgthinqapp from "../assets/images/lgthinqapp.png";
import portfolio from "../assets/images/portfolio.png";
import pupping from "../assets/images/pupping.png";
import saltAewol from "../assets/images/saltaewol.png";
import tasomcare from "../assets/images/tasomcare.png";
import todolist from "../assets/images/todolist.png";
import gram from "../assets/images/gram.png";
import blog from "../assets/images/blog.png";

export const PROJECTS = [
  {
    stack: "bussiness",
    name: "Account NFT",
    className: "account-nft",
    image: accountNFT,
    skills: ["React-Native", "TypeScript"],
    description:
      "현재 보유한 NFT로 소셜 로그인처럼 로그인을 할 수 있는 프로젝트를 진행했습니다.\n배포까지 직접 진행했으며, 이 과정에서 Android Studio와 XCode를 사용한 경험이 있습니다.\nUI는 컴포넌트 라이브러리인 Material UI를 사용해서 구현했으며, 백엔드와 통신을 통해 로그인 처리를 하고, 현재 보유한 NFT 현황을 볼 수 있는 등 블록체인 기술을 접목하여 개발한 하이브리드 앱 어플리케이션 입니다.",
    url: "https://play.google.com/store/apps/details?id=accountnft",
  },
  {
    stack: "bussiness",
    name: "DIBIDIBI",
    className: "dibidibi",
    image: dibidibi,
    skills: ["Vue.js", "JQuery"],
    description:
      "비디오 소셜 커며스 플랫폼인 DIBIDIBI의 관리자 페이지를 작업하고 유지/보수를 진행했습니다.\n관리자 페이지에서 스타일 가이드를 따로 정리해서 문서화했으며, 백엔드와 통신을 통해 다양한 데이터를 시각화했습니다.\n기존 HTML, CSS, JQuery로 제작된 페이지를 Vue.js 프레임워크를 사용하여 고도화 시키는 작업을 진행했습니다.",
    url: "https://www.dibidibi.com",
  },
  {
    stack: "personal",
    name: "Frederic Malle",
    className: "frederic-malle",
    image: fredericMalle,
    skills: ["JavaScript"],
    description:
      "개인 포트폴리오로 사용하기 위해 제작한 Frederic Malle의 홈페이지입니다.\n좋아하는 향수 브랜드를 이미지와 어울리게 UI/UX 디자인부터 진행했습니다.\nFlickr와 Youtube API를 사용해 갤러리와 유튜브 재생목록을 추가했습니다.\n스크롤 애니메이션과 마우스 포인터 이펙터를 기타 라이브러리를 쓰지 않고 Javascript로 직접 구현했습니다.",
    url: "https://chahyunwoo.github.io/portfolio-bussiness",
  },
  {
    stack: "bussiness",
    name: "LG ThinkQ App",
    className: "lg-thinq-app",
    image: lgthinqapp,
    skills: ["React"],
    description:
      "현재 상용화되어 있는 LG ThinQ App의 공통 컴포넌트 제작 및 유지/보수를 진행했습니다.\n접근성을 고려하여 컴포넌트 개발을 진행했고, 컴포넌트의 편리한 사용을 위해 문서화하는 작업을 했습니다.\n대규모 프로젝트로 다양한 인원들과 협업을 진행하여 형상관리의 중요성을 인지하며 작업하였고, 다양한 기능이 들어있는 공통 컴포넌트를 제작했습니다.",
    url: "https://play.google.com/store/apps/details?id=com.lgeha.nuts&hl=ko&gl=US",
  },
  {
    stack: "personal",
    name: "Portfolio",
    className: "portfolio",
    image: portfolio,
    skills: ["React", "TypeScript"],
    description:
      "현재 보고계신 포트폴리오 페이지입니다.\n기존 React로만 개발되었던 페이지를 안정성을 높이기 위해 정적 타입을 사용하여 고도화 작업을 했으며, Chakra UI와 Styled-components를 사용하여 UI를 구성했습니다.\n다양한 애니메이션 효과를 구현하였으며, 애니메이션 효과를 주기 위해 framer-motion 라이브러리를 사용했습니다.",
    url: "https://chahyunwoobi.com",
  },
  {
    stack: "bussiness",
    name: "Pupping",
    className: "pupping",
    image: pupping,
    skills: ["React"],
    description:
      "NFT 관련 사업 프로젝트를 진행했습니다.\n민팅을 위해 페이지 홍보 용도로 제작하였으며 React를 사용하여 개발했습니다.\n다양한 애니메이션 효과 및 풀페이지 형식의 반응형 웹 사이트입니다.\nAPI와 연동을 통해 다양한 데이터를 화면에 시각화하였으며, UI 디자이너와 협업을 통해 최적의 UI와 모션 효과를 삽입했습니다.",
    url: "https://pupping.io",
  },
  {
    stack: "personal",
    name: "Salt Aewol",
    className: "salt-aewol",
    image: saltAewol,
    skills: ["React"],
    description:
      "개인 포트폴리오로 사용하기 위해 제작한 Salt Aewol의 홈페이지입니다.\n깔끔하고 청량한 이미지를 주기 위해 화이트와 블루 계열의 톤으로 UI/UX 디자인부터 진행했습니다.\nFlickr와 Youtube API를 사용해 갤러리와 유튜브 재생목록을 추가했습니다.\n전역 상태관리를 위해 redux-saga를 사용하고, 캐싱처리를 통해 페이지를 최적화했습니다.",
    url: "https://chahyunwoo.github.io/portfolio-bussiness-react",
  },
  {
    stack: "bussiness",
    name: "따솜 돌봄앤시터",
    className: "tasom-care",
    image: tasomcare,
    skills: ["React", "TypeScript"],
    description:
      "가사도우미 구인, 구직 및 회사 소개를 위한 웹사이트 제작 프로젝트를 진행했습니다.\n서비스의 안정성을 높이기 위해 React TypeScript로 프로젝트를 진행했으며, 백엔드와 통신을 통해 로그인 처리 및 게시판 구현, 그리고 관리자 페이지를 제작했습니다.\n진행 과정에서 Swagger를 통해 API를 제공받고, Postman으로 테스트를 진행하며 안정적으로 개발했습니다.",
    url: "https://www.tasomcare.com",
  },
  {
    stack: "personal",
    name: "To-Do List",
    className: "to-do-list",
    image: todolist,
    skills: ["React", "TypeScript"],
    description:
      "개인 포트폴리오 용도로 사용하기 위해 제작한 페이지입니다.\nReact, Typescript를 사용하여 제작한 페이지이며 local Storage 기능을 이용하여 사용자의 데이터를 저장했습니다.\nWeather API를 사용하여 사용자의 위치를 추적해 실시간으로 날씨를 보여주는 작업과 OpenAI API를 사용하여 인공지능 AI와 채팅을 할 수 있는 기능을 개발하고 Vercel을 통해 배포했습니다.\n전역 상태관리를 위해 redux-toolkit을 사용했습니다.",
    url: "https://todolist-web-typescript.vercel.app/",
  },
  {
    stack: "personal",
    name: "GRAM",
    className: "gram",
    image: gram,
    skills: ["Next.js", "TypeScript"],
    description:
      "개인 프로젝트로 인스타그램 클론코딩을 했습니다.\nNext 13버전을 이용해 최신 업데이트를 반영하여 제작하였으며, vercel에서 만든 SWR을 사용하여 데이터 페칭 작업을 했습니다.\nHeadless CMS인 Sanity를 사용하여 좋아요, 코멘트, 팔로잉, 포스팅 등 다양한 기능과, Next-Auth를 사용하여 OAuth 로그인 처리를 구현하였습니다,\n미들웨어를 사용하여 안정성을 높였습니다.",
    url: "https://nextjs-instagram-chw.vercel.app/",
  },
  {
    stack: "personal",
    name: "BLOG",
    className: "blog",
    image: blog,
    skills: ["Next.js", "TypeScript"],
    description:
      "기술 및 일상을 공유하기 위해 Next 13을 이용해 블로그를 제작했습니다.\nSWR과 axios를 사용하여 데이터를 페칭하였고, contentlayer를 사용해 mdx 파일로 포스트를 작성하고 업로드하고 있습니다.\n오픈 소스 db 플랫폼인 supabase를 사용하여 방명록 작성 기능을 구현하였고, tailwind로 다크모드, 라이트모드 테마 변경이 가능한 반응형 웹페이지입니다.",
    url: "https://chahyunwoo.dev",
  },
];
