import accountNFT from "../assets/images/accountNFT.png";
import dibidibi from "../assets/images/dibidibi.png";
import fredericMalle from "../assets/images/fredericMalle.png";
import lgthinqapp from "../assets/images/lgthinqapp.png";
import portfolio from "../assets/images/portfolio.png";
import pupping from "../assets/images/pupping.png";
import saltAewol from "../assets/images/saltaewol.png";
import tasomcare from "../assets/images/tasomcare.png";
import todolist from "../assets/images/todolist.png";

export const PROJECTS = [
  {
    stack: "bussiness",
    name: "Account NFT",
    className: "account-nft",
    image: accountNFT,
    skills: ["React Native", "TypeScript", "Material UI"],
    description:
      "현재 보유한 NFT로 소셜 로그인처럼 로그인을 할 수 있는 프로젝트를 진행했습니다. 배포까지 직접 진행했으며, 이 과정에서 Android Studio와 XCode를 사용한 경험이 있습니다. UI는 컴포넌트 라이브러리인 Material UI를 사용해서 구현했으며, 백엔드와 통신을 통해 로그인 처리를 하고, 현재 보유한 NFT 현황을 볼 수 있는 등 블록체인 기술을 접목하여 개발한 하이브리드 앱 어플리케이션 입니다.",
    url: "https://play.google.com/store/apps/details?id=accountnft",
  },
  {
    stack: "bussiness",
    name: "DIBIDIBI",
    className: "dibidibi",
    image: dibidibi,
    skills: ["Vue.js", "Sass", "JQuery"],
    description:
      "비디오 소셜 커며스 플랫폼인 DIBIDIBI의 관리자 페이지를 작업하고 유지/보수를 진행했습니다. 관리자 페이지에서 스타일 가이드를 따로 정리해서 문서화했으며, 백엔드와 통신을 통해 다양한 데이터를 시각화했습니다. 기존 HTML, CSS, JQuery로 제작된 페이지를 Vue.js 프레임워크를 사용하여 고도화 시키는 작업을 진행했습니다.",
    url: "https://www.dibidibi.com",
  },
  {
    stack: "personal",
    name: "Frederic Malle",
    className: "frederic-malle",
    image: fredericMalle,
    skills: ["HTML", "Sass", "JavaScript"],
    description:
      "개인 포트폴리오로 사용하기 위해 제작한 Frederic Malle의 홈페이지입니다. 좋아하는 향수 브랜드를 이미지와 어울리게 UI/UX 디자인부터 진행했습니다. Flickr와 Youtube API를 사용해 갤러리와 유튜브 재생목록을 추가했습니다. 스크롤 애니메이션과 마우스 포인터 이펙터를 기타 라이브러리를 쓰지 않고 Javascript로 직접 구현했습니다.",
    url: "https://chahyunwoo.github.io/portfolio-bussiness",
  },
  {
    stack: "bussiness",
    name: "LG ThinkQ App",
    className: "lg-thinq-app",
    image: lgthinqapp,
    skills: ["React"],
    description:
      "현재 상용화되어 있는 LG ThinQ App의 공통 컴포넌트 제작 및 유지/보수를 진행했습니다. 접근성을 고려하여 컴포넌트 개발을 진행했고, 컴포넌트의 편리한 사용을 위해 문서화하는 작업을 했습니다. 대규모 프로젝트로 다양한 인원들과 협업을 진행하여 형상관리의 중요성을 인지하며 작업하였고, 다양한 기능이 들어있는 공통 컴포넌트를 제작했습니다.",
    url: "https://play.google.com/store/apps/details?id=com.lgeha.nuts&hl=ko&gl=US",
  },
  {
    stack: "personal",
    name: "Portfolio Page",
    className: "portfolio-page",
    image: portfolio,
    skills: ["React", "TypeScript", "Chakra UI", "Styled-components"],
    description:
      "현재 보고계신 포트폴리오 페이지입니다. 기존 React로만 개발되었던 페이지를 안정성을 높이기 위해 정적 타입을 사용하여 고도화 작업을 했으며, Chakra UI와 Styled-components를 사용하여 UI를 구성했습니다. 다양한 애니메이션 효과 및 3D 효과를 구현하였으며, 애니메이션 효과를 주기 위해 framer-motion 라이브러리를 사용했습니다..",
    url: "#",
  },
  {
    stack: "bussiness",
    name: "Pupping",
    className: "pupping",
    image: pupping,
    skills: ["React"],
    description:
      "NFT 관련 사업 프로젝트를 진행했습니다. 민팅을 위해 페이지 홍보 용도로 제작하였으며 React를 사용하여 개발했습니다. 다양한 애니메이션 효과 및 풀페이지 형식의 반응형 웹 사이트입니다. API와 연동을 통해 다양한 데이터를 화면에 시각화하였으며, UI 디자이너와 협업을 통해 최적의 UI와 모션 효과를 삽입했습니다.",
    url: "https://pupping.io",
  },
  {
    stack: "personal",
    name: "Salt Aewol",
    className: "salt-aewol",
    image: saltAewol,
    skills: ["React", "Sass"],
    description:
      "개인 포트폴리오로 사용하기 위해 제작한 Salt Aewol의 홈페이지입니다. 깔끔하고 청량한 이미지를 주기 위해 화이트와 블루 계열의 톤으로 UI/UX 디자인부터 진행했습니다. Flickr와 Youtube API를 사용해 갤러리와 유튜브 재생목록을 추가했습니다. 캐싱처리를 통해 페이지를 최적화시켰습니다.",
    url: "https://chahyunwoo.github.io/portfolio-bussiness-react",
  },
  {
    stack: "bussiness",
    name: "따솜 돌봄앤시터",
    className: "tasom-care",
    image: tasomcare,
    skills: ["React", "TypeScript", "Sass"],
    description:
      "가사도우미 구인, 구직 및 회사 소개를 위한 웹사이트 제작 프로젝트를 진행했습니다. 서비스의 안정성을 높이기 위해 React TypeScript로 프로젝트를 진행했으며, 백엔드와 통신을 통해 로그인 처리 및 게시판 구현, 그리고 관리자 페이지를 제작했습니다. 진행 과정에서 Swagger를 통해 API를 제공받고, Postman으로 테스트를 진행하며 안정적으로 개발했습니다.",
    url: "https://www.tasomcare.com",
  },
  {
    stack: "personal",
    name: "To-Do List",
    className: "to-do-list",
    image: todolist,
    skills: ["React", "TypeScript", "Styled-components"],
    description:
      "개인 포트폴리오 용도로 사용하기 위해 제작한 페이지입니다. React, Typescript를 사용하여 제작한 페이지이며 local Storage 기능을 이용하여 사용자의 데이터를 저장했습니다. Weather API를 사용하여 사용자의 위치를 추적해 실시간으로 날씨를 보여주는 작업과 OpenAI API를 사용하여 인공지능 AI와 채팅을 할 수 있는 기능을 개발하고 Vercel을 통해 배포했습니다.",
    url: "https://todolist-web-typescript.vercel.app/",
  },
];
