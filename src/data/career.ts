import TwinLogo from "../assets/images/twinlogo.png";
import RncLogo from "../assets/images/rnclogo.png";
import OmetaLogo from "../assets/images/ometalogo.jpeg";
import ChahyunwooLogo from "../assets/images/chahyunwoologo.png";

export const CAREER = [
  {
    name: "Freelancer",
    duration: "2025.05 - 현재",
    logo: ChahyunwooLogo,
    description: "2025년 5월 이후로 현재 프론트엔드 개발자 프리랜서로 활동 중입니다.",
    project: [
      {projectTitle: "서비스 내 사용 가이드 적용",
        projectDesc: [
          "Next.js 기반의 모노레포 프로젝트에서 신규 기능 추가",
          "React-Joyride를 활용한 서비스 내 사용 가이드 적용",
        ],
      },
      {
        projectTitle: "금융권 백오피스 시스템 개발",
        projectDesc: [
          "React 19, Typescript, Styled-component를 사용하여 금융권 백오피스 시스템 개발",
          "React-Query를 활용한 데이터 관리 및 캐싱 적용",
          "Zustand를 활용한 상태 관리 및 데이터 흐름 관리",
          "React-Hook-Form을 활용한 폼 관리 및 유효성 검사",
          "프론트엔드 개발 PL로서 팀원들과의 커뮤니케이션 및 프로젝트 관리",
        ],
      },
      {
        projectTitle: "대기업 전기차 충전 플랫폼 개발",
        projectDesc: [
          "React 환경에서 디자인 시스템 및 공통 컴포넌트 개발",
          "대기업 프로젝트로 복잡한 프로젝트 관리 경험 및 협업",
          "Storybook을 활용한 컴포넌트 라이브러리 개발 및 관리",
          "페이지 단위의 컴포넌트 테스트 코드 작성 및 리팩토링"
        ]
      }
    ],
  },
  {
    name: "(주) 티윈",
    duration: "2023.02 - 2025.04",
    logo: TwinLogo,
    description:
      "LG전자의 협력사로 LG 마곡 사이언스파크에서 파견직으로 근무 중이며, 현재 부팀장의 직책으로 업무를 수행 중에 있습니다.",
    project: [
      {
        projectTitle: "LG ThinQ App",
        projectDesc: [
          "LG전자 가전 IOT 서비스를 위한 ThinQ App의 공통 컴포넌트 개발 및 유지보수를 담당",
          "NOTION을 직접 관리하여 팀원들과의 커뮤니케이션에 차질이 없도록 관리",
          "대기업의 업무 프로세스를 이해하며, 형상관리, 코드리뷰 등 직접적인 소통을 통해 업무 진행",
        ],
      },
      {
        projectTitle: "LG webOS App Shoptime 2.0",
        projectDesc: [
          "아키텍처 설계부터 프로덕션 출시까지 프론트엔드 개발 리드로서 기술 스택 선정 및 개발 프로세스 구축",
          "Redux 에코시스템(redux-thunk, redux-saga)을 활용한 확장 가능한 상태 관리 아키텍처 설계",
          "다국어 지원(미국, 독일, 러시아, 영국) 시스템 개선 및 i18n 프레임워크 통합 관리",
          "신규 결제 시스템 연동 및 PG사 API 통합으로 결제 전환율 향상",
        ]
      }
    ],
  },
  {
    name: "(주) 래프트앤컴퍼니",
    duration: "2021.11 - 2022.11",
    logo: RncLogo,
    description:
      "메인 프론트엔드 담당자로, React를 활용한 서비스 개발을 주로 진행했습니다.\n기획자 및 웹디자이너와 다양한 협업을 통해 프로젝트를 수행했습니다.",
    project: [
      {
        projectTitle: "accountNFT",
        projectDesc: [
          "카카오 로그인과 같은 소셜 로그인 기능처럼 NFT로 로그인을 하는 웹 어플리케이션 프로젝트 수행",
          "React Typescript 정적 타입을 사용하여 서비스의 안정화를 높임",
          "React Native를 통해 하이브리드 앱을 제작 및 배포까지 진행",
        ],
      },
      {
        projectTitle: "따솜 돌봄앤시터",
        projectDesc: [
          "가사도우미 구인 및 구직 플랫폼 프로젝트 수행",
          "React Typescript 정적 타입을 사용하여 서비스의 안정화를 높임",
          "Swagger를 사용해 api 문서를 제공받아 사용한 경험이 있으며, Postman을 통해 api 테스트 진행",
        ],
      },
      {
        projectTitle: "Pupping NFT",
        projectDesc: [
          "NFT 발행 사업으로, 민팅 페이지 및 랜딩 페이지 제작 프로젝트",
          "React로 서비스 개발을 했으며, 다양한 모션 스크롤 애니메이션 라이브러리를 직접 수정해서 사용",
        ],
      },
    ],
  },
  {
    name: "(주) 오메타 (비알스톰)",
    duration: "2019.11 - 2021.10",
    logo: OmetaLogo,
    description:
      "개발팀의 팀원으로, 퍼블리싱 및 프론트엔드 개발 업무에 투입되었습니다.\n다수의 팀원들과 형상관리를 통해 프로젝트를 진행했습니다.",
    project: [
      {
        projectTitle: "DIBIDIBI",
        projectDesc: [
          "비디오 커머셜 플랫폼으로 관리자 페이지 퍼블리싱 및 개발 업무 진행",
          "Vue.js를 사용하여 데이터를 효율적으로 처리하며, 안정적이고 빠른 응답성을 제공",
          "스타일 가이드를 문서화시키고 구조화했습니다.",
        ],
      },
      {
        projectTitle: "웹툰 저작물 중개 플랫폼",
        projectDesc: [
          "웹툰 작가와, 포털 사이트 웹툰 담당자와의 원활한 계약을 위한 중개 서비스를 제공하는 플랫폼",
          "React를 사용하여 안정적인 렌더링과, 재사용을 위한 컴포넌트 개발 및 가독성을 위한 코드 정리",
        ],
      },
    ],
  },
];
