
export const translations = {
  en: {
    nav: { features: "Features", download: "Download", guide: "User Guide" },
    hero: {
      title: "Your Records, {transformed} into Deep Insights",
      transformed: "Transformed",
      subtitle: "Connecting scattered schedules and notes into a single context. Discover new meaning hidden within your records with a workspace designed for focus and clarity.",
      downloadMac: "Download for macOS",
      downloadWin: "Download for Windows",
      comingSoon: "Coming Soon",
      mockup: {
        calendar: "CALENDAR",
        tasks: "TASKS",
        timeline: "TIMELINE",
        noEvents: "NO EVENTS",
        todayMeeting: "Today's Meeting",
        emptyNotes: "Empty Notes"
      },
    },
    modal: {
      title: "Get Notified on Launch",
      description: "Be the first to know when Nuvio Note is released.",
      placeholder: "Enter your email address",
      submit: "Notify Me",
      successTitle: "You're on the list!",
      successDesc: "Thank you for subscribing. We will keep you updated.",
      close: "Close",
      error: "Failed to subscribe. Please try again.",
      privacy: "We respect your inbox. No spam, ever."
    },
    features: {
      title: "Key Features",
      subtitle: "Thoughtfully crafted features designed to help you organize your digital life with elegance and speed.",
      items: [
        { title: "Local Storage", desc: "Your thoughts are your own. All data sits encrypted on your device, never touching our servers." },
        { title: "Markdown Editor", desc: "A clean, efficient writing experience with live preview and deep distraction-free modes." },
        { title: "Calendar Sync", desc: "Seamless integration with Google Calendar and Outlook for a unified timeline of your life." },
        { title: "Timeline View", desc: "Visualize your goals and schedules in a sleek Gantt chart style that makes planning effortless." },
        { title: "Fast Search", desc: "Ultra-fast full-text search. Find any note, task, or event in milliseconds with powerful filters." },

      ]
    },
    cta: {
      title: "Coming soon with {powerful}",
      powerful: "more powerful features",
      subtitle: "We are preparing premium feature updates. Please wait a little longer for a better experience.",
      button: "Notify Me When Ready"
    },
    footer: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      contact: "Contact",
      rights: "All rights reserved."
    },
    privacy: {
      title: "Privacy Policy",
      intro: "Nuvio Note (hereinafter referred to as \"the Company\") values the protection of users' personal information and complies with relevant laws such as the Personal Information Protection Act. Through this Privacy Policy, the Company informs you of the purpose and method of using the personal information you provide and the measures taken for personal information protection.",
      sections: [
        {
          title: "1. Items of Personal Information Collected and Collection Method",
          subsections: [
            {
              title: "A. Items of Personal Information Collected",
              items: [
                "When signing up: Name, email address, password, profile picture",
                "During service usage: Service usage records, access logs, cookies, connection IP information, device information",
                "When linking Google account: Google user ID, email address, profile information, Google Calendar event information (with user consent)"
              ]
            },
            {
              title: "B. Collection Method",
              content: "Website/App sign-up, service usage, provision from affiliates, collection via information generation tools"
            }
          ]
        },
        {
          title: "2. Purpose of Collection and Use of Personal Information",
          items: [
            "Service Provision: Content provision, customized service provision, identity verification for service usage",
            "Member Management: Identity verification for membership services, personal identification, confirmation of intent to join, prevention of illegal use by bad members",
            "New Service Development and Marketing: Development of new services and customized service provision, service provision based on statistical characteristics, provision of event and advertising information"
          ]
        },
        {
          title: "3. Retention and Usage Period of Personal Information",
          content: "The Company retains and uses personal information within the period of retention and usage of personal information according to laws or the period agreed upon when collecting personal information from the information subject.",
          items: [
            "Until membership withdrawal (However, if there is a violation of relevant laws or a request from an investigation agency, until the relevant reason is terminated)",
            "If an investigation regarding a violation of relevant laws is in progress, until the investigation is terminated",
            "If debts/credits remain due to service usage, until the debts/credits are settled"
          ]
        },
        {
          title: "4. Google User Data Policy",
          content: "Nuvio Note complies with the {link} (including limited use requirements) regarding the use of information received from Google APIs and transfer to other apps.",
          linkText: "Google API Services User Data Policy",
          calendarData: "User's Google Calendar data is used only to provide in-app schedule management features with the user's explicit consent and is not sold to third parties or used for advertising purposes."
        },
        {
          title: "5. Rights of Users and Method of Exercise",
          content: "Users can view or modify their registered personal information or request cancellation of subscription at any time.",
          items: [
            "View/Modify Personal Information: Use 'Settings > Profile' menu in the app",
            "Withdrawal: Use 'Delete Account' function in the app or contact customer center"
          ]
        },
        {
          title: "6. Chief Privacy Officer",
          content: "The Company designates a Chief Privacy Officer as follows to take overall responsibility for personal information processing and to handle complaints and damage relief of information subjects related to personal information processing.",
          manager: "Manager: Privacy Management Officer",
          email: "Email: support@nuvio.now"
        }
      ],
      date: "Announcement Date: December 25, 2025\nEffective Date: December 25, 2025"
    },
    guide: {
      title: "Nuvio Note User Guide",
      intro: "Nuvio Note is an application that allows you to record work-related notes and systematically manage meeting discussions like To-Do items.\nIt also provides powerful search capabilities so you can quickly check your notes at any time.",
      sections: [
        {
          title: "1. Getting Started",
          subsections: [
            {
              title: "Installation & Execution",
              content: "Run the downloaded installation file (Nuvio Note.exe or Nuvio Note.dmg) to complete the installation and launch the application."
            },
            {
              title: "Account Connection (Optional)",
              content: "Nuvio Note allows you to use all note features without logging in by default.",
              alert: {
                title: "When is Google Login required?",
                content: "If you only use simple note-taking and management features, login is not required.\nLogin is only required when you want to use the Schedule Management (Google Calendar integration) feature to check calendar schedules in the app."
              },
              items: [
                "Click the Profile icon in the top right corner.",
                "Click the \"Sign in with Google\" button.",
                "When the browser opens, log in with your Google account and grant permissions.",
                "Once logged in, your profile image will appear, and calendar integration will begin."
              ]
            },
            {
              title: "Interface Overview",
              content: "Nuvio Note consists of a Left Navigation and a Right Workspace for efficient work.",
              items: [
                "Header: Contains Search (Cmd+K / Ctrl+K) and Profile/Settings.",
                "Left Panel (Navigation): Provides 4 tabs (ISSUES, TASKS, CALENDAR, TIMELINE) which can be reordered.",
                "Right Panel (Workspace): Space for writing notes and checking details. Supports Tab-based multi-tasking."
              ]
            }
          ]
        },
        {
          title: "2. Features",
          intro: "The right panel provides 4 views: Calendar Detail, Note, Todo, and Timeline.",
          subsections: [
            {
              title: "Search",
              icon: "search",
              items: [
                "Integrated Search: Press Cmd+K (macOS) / Ctrl+K (Windows) to search all notes and schedules.",
                "Category Search: Type @ in the search bar to select a category."
              ]
            },
            {
              title: "Calendar Detail",
              icon: "calendar",
              content: "Manage schedules linked with Google Calendar and organize Post-meeting Work.",
              items: [
                "Meeting Status: WAIT (Pending), PROG (In Progress), DONE (Completed).",
                "Meeting Notes: Click the Note button on an event card to create linked notes.",
                "Sync: Google Calendar changes are not auto-synced. Click the Sync icon to update."
              ]
            },
            {
              title: "Note",
              icon: "note",
              content: "Powerful Markdown editor.",
              items: [
                "Creation: Created as daily work notes selected in the left calendar.",
                "Pin: Pin a note to show it across different dates.",
                "Lock: Prevent accidental edits.",
                "Editor: Supports EDIT / SPLIT / PREVIEW modes and CHEATSHEET."
              ]
            },
            {
              title: "Todo",
              icon: "todo",
              items: [
                "Integrated Management: Linked with ISSUES and TASKS tabs.",
                "Daily Management: Add and manage tasks for specific dates.",
                "Grouping: Automatically grouped by status."
              ]
            },
            {
              title: "Timeline",
              icon: "timeline",
              content: "Visualizes project progress in a Gantt Chart style.",
              items: [
                "Auto-generation: Enter data in the specific format in the note panel to generate the chart."
              ],
              codeExample: {
                format: "Project Name, Start Date, End Date\nTask Name, Start Date, End Date, Owner1, Owner2...",
                example: "Website Renewal, 2024-01-01, 2024-03-31\nDesign Draft, 2024-01-01, 2024-01-15, John, Jane\nFrontend Dev, 2024-01-16, 2024-02-28, Mike"
              }
            }
          ]
        },
        {
          title: "3. Settings",
          content: "Click the Settings (Gear) icon in the bottom left.",
          items: [
            "Theme: Light, Dark, or System.",
            "Language: Korean, English, Japanese.",
            "Editor: Adjust font and size.",
            "Data: Backup or export notes."
          ]
        }
      ]
    },
    terms: {
      title: "Terms of Service",
      intro: "These terms aim to define rights, obligations, responsibilities, and other necessary matters between Nuvio Note (hereinafter referred to as \"the Company\") and members regarding the use of services provided by the Company.",
      sections: [
        {
          title: "Article 1 (Purpose)",
          content: "These terms aim to define the rights, obligations, and responsibilities of the Company and users in using the Nuvio Note service (hereinafter referred to as \"Service\") operated by the Company."
        },
        {
          title: "Article 2 (Definition of Terms)",
          items: [
            "\"Service\" means Nuvio Note and related services available to members regardless of terminal (including various wired/wireless devices such as PC, portable terminals).",
            "\"Member\" means a customer who accesses the Company's service, enters into a use contract with the Company according to these terms, and uses the services provided by the Company.",
            "\"Post\" means writings, photos, videos, and various files and links in the form of information such as signs, characters, voices, sounds, images, and videos posted by members on the service while using the service."
          ]
        },
        {
          title: "Article 3 (Posting and Revision of Terms)",
          items: [
            "The Company posts the contents of these terms on the initial screen of the service so that members can easily know them.",
            "The Company may revise these terms to the extent that it does not violate relevant laws such as the 'Act on the Regulation of Terms and Conditions' and the 'Act on Promotion of Information and Communications Network Utilization and Information Protection'.",
            "If the Company revises the terms, it shall specify the application date and the reason for revision and announce it along with the current terms from 7 days before the application date to the day before the application date."
          ]
        },
        {
          title: "Article 4 (Obligations of the Company)",
          items: [
            "The Company shall not engage in acts prohibited by relevant laws and these terms or contrary to good morals, and shall do its best to provide services continuously and stably.",
            "The Company must have a security system to protect personal information so that members can use the service safely and abide by the Privacy Policy."
          ]
        },
        {
          title: "Article 5 (Obligations of Members)",
          content: "Members shall not engage in the following acts:",
          items: [
            "Registration of false information when applying or changing",
            "Identity theft of others",
            "Changing information posted by the Company",
            "Sending or posting information (computer programs, etc.) other than information set by the Company",
            "Infringement of intellectual property rights such as copyrights of the Company and other third parties",
            "Acts that damage the reputation of the Company and other third parties or interfere with business"
          ]
        },
        {
          title: "Article 6 (Attribution of Copyright)",
          items: [
            "The copyright of the post posted by the member in the service belongs to the author of the post.",
            "Copyrights and other intellectual property rights for works created by the Company belong to the Company."
          ]
        },
        {
          title: "Article 7 (Disclaimer)",
          items: [
            "The Company is exempted from responsibility for service provision if it cannot provide services due to natural disasters or force majeure equivalent thereto.",
            "The Company is not responsible for obstacles to service usage caused by reasons attributable to the member.",
            "The Company is not responsible for the use of free services unless there are special provisions in relevant laws."
          ]
        }
      ],
      date: "Announcement Date: December 25, 2025\nEffective Date: December 25, 2025"
    }
  },
  ko: {
    nav: { features: "주요기능", download: "다운로드", guide: "사용자 가이드" },
    hero: {
      title: "당신의 기록, {transformed}이 되다",
      transformed: "깊은 통찰",
      subtitle: "흩어진 일정과 노트를 하나의 맥락으로 연결하세요. 집중과 명확함을 위해 설계된 워크스페이스에서 당신의 기록 속에 숨겨진 새로운 의미를 발견해보세요.",
      downloadMac: "macOS용 다운로드",
      downloadWin: "Windows용 다운로드",
      comingSoon: "준비 중",
      mockup: {
        calendar: "캘린더",
        tasks: "할 일",
        timeline: "타임라인",
        noEvents: "일정 없음",
        todayMeeting: "오늘의 회의",
        emptyNotes: "노트가 비어있습니다"
      },
    },
    modal: {
      title: "출시 알림 받기",
      description: "Nuvio Note가 출시되면 가장 먼저 알려드립니다.",
      placeholder: "이메일 주소를 입력하세요",
      submit: "알림 받기",
      successTitle: "구독 완료!",
      successDesc: "감사합니다. 출시 소식을 빠르게 전해드리겠습니다.",
      close: "닫기",
      error: "구독에 실패했습니다. 다시 시도해주세요.",
      privacy: "스팸 메일은 절대 보내지 않습니다."
    },
    features: {
      title: "주요 기능",
      subtitle: "당신의 디지털 삶을 우아하고 빠르게 정리할 수 있도록 정성스럽게 제작된 기능들입니다.",
      items: [
        { title: "로컬 저장소", desc: "당신의 생각은 오직 당신의 것입니다. 모든 데이터는 기기에 암호화되어 저장되며 서버에 전송되지 않습니다." },
        { title: "마크다운 에디터", desc: "실시간 미리보기와 몰입 모드를 통해 깔끔하고 효율적인 글쓰기 경험을 제공합니다." },
        { title: "캘린더 동기화", desc: "구글 캘린더 및 아웃룩과 원활하게 통합되어 삶의 모든 일정을 하나로 관리합니다." },
        { title: "타임라인 뷰", desc: "세련된 간트 차트 스타일로 목표와 일정을 시각화하여 계획 수립을 수월하게 만듭니다." },
        { title: "빠른 검색", desc: "초고속 전체 텍스트 검색. 강력한 필터로 어떤 노트나 작업도 순식간에 찾아냅니다." },

      ]
    },
    cta: {
      title: "{powerful}과 함께 곧 찾아옵니다",
      powerful: "더 강력한 기능들",
      subtitle: "더 나은 경험을 위해 프리미엄 기능 업데이트를 준비하고 있습니다. 조금만 더 기다려 주세요.",
      button: "출시 알림 받기"
    },
    footer: {
      privacy: "개인정보 처리방침",
      terms: "이용 약관",
      contact: "문의하기",
      rights: "모든 권리 보유."
    },
    privacy: {
      title: "개인정보처리방침",
      intro: "Nuvio Note(이하 \"회사\"라 함)는 이용자의 개인정보보호를 매우 중요시하며, 『개인정보 보호법』 등 관련 법령을 준수하고 있습니다. 회사는 본 개인정보처리방침을 통하여 이용자께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.",
      sections: [
        {
          title: "1. 수집하는 개인정보 항목 및 수집방법",
          subsections: [
            {
              title: "가. 수집하는 개인정보 항목",
              items: [
                "회원가입 시: 이름, 이메일 주소, 비밀번호, 프로필 사진",
                "서비스 이용 과정: 서비스 이용 기록, 접속 로그, 쿠키, 접속 IP 정보, 기기 정보",
                "Google 계정 연동 시: Google 사용자 ID, 이메일 주소, 프로필 정보, Google Calendar 일정 정보(사용자 동의 시)"
              ]
            },
            {
              title: "나. 개인정보 수집방법",
              content: "홈페이지/앱 회원가입, 서비스 이용, 제휴사로부터의 제공, 생성정보 수집 툴을 통한 수집"
            }
          ]
        },
        {
          title: "2. 개인정보의 수집 및 이용목적",
          items: [
            "서비스 제공: 콘텐츠 제공, 맞춤형 서비스 제공, 서비스 이용에 따르는 본인인증",
            "회원 관리: 회원제 서비스 이용에 따른 본인확인, 개인식별, 가입의사 확인, 불량회원의 부정이용 방지",
            "신규 서비스 개발 및 마케팅: 신규 서비스 개발 및 맞춤 서비스 제공, 통계학적 특성에 따른 서비스 제공, 이벤트 및 광고성 정보 제공"
          ]
        },
        {
          title: "3. 개인정보의 보유 및 이용기간",
          content: "회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 보유·이용합니다.",
          items: [
            "회원 탈퇴 시까지 (다만, 관계 법령에 위반되거나 수사기관의 요청이 있는 경우 해당 사유 종료 시까지)",
            "관계 법령 위반에 따른 수사·조사 등이 진행 중인 경우에는 해당 수사·조사 종료 시까지",
            "서비스 이용에 따른 채권·채무관계 잔존 시에는 해당 채권·채무관계 정산 시까지"
          ]
        },
        {
          title: "4. Google 사용자 데이터 정책",
          content: "Nuvio Note는 Google API로부터 받은 정보의 사용 및 다른 앱으로의 이전을 포함하여 {link}을 준수합니다(제한적 사용 요건 포함).",
          linkText: "Google API 서비스 사용자 데이터 정책(Google API Services User Data Policy)",
          calendarData: "사용자의 Google Calendar 데이터는 사용자의 명시적인 동의 하에 앱 내 일정 관리 기능을 제공하기 위해서만 사용되며, 제3자에게 판매되거나 광고 목적으로 사용되지 않습니다."
        },
        {
          title: "5. 이용자의 권리와 행사방법",
          content: "이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며 가입해지를 요청할 수 있습니다.",
          items: [
            "개인정보 조회/수정: 앱 내 '설정 > 프로필' 메뉴 이용",
            "회원탈퇴: 앱 내 '계정 삭제' 기능 이용 또는 고객센터 문의"
          ]
        },
        {
          title: "6. 개인정보 보호책임자",
          content: "회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.",
          manager: "담당자: 개인정보 관리 담당자",
          email: "이메일: support@nuvio.now"
        }
      ],
      date: "공고일자: 2025년 12월 25일\n시행일자: 2025년 12월 25일"
    },
    guide: {
      title: "Nuvio Note 사용자 가이드",
      intro: "Nuvio Note는 업무와 관련된 기록을 남기고, 미팅에서 논의되는 내용을 마치 할 일(TODO)처럼 체계적으로 관리할 수 있는 애플리케이션입니다.\n또한, 강력한 검색 기능을 제공하여 언제든지 빠르게 메모 내용을 확인할 수 있습니다.",
      sections: [
        {
          title: "1. 시작하기 (Getting Started)",
          subsections: [
            {
              title: "설치 및 실행",
              content: "다운로드한 설치 파일(Nuvio Note.exe 또는 Nuvio Note.dmg)을 실행하여 설치를 완료하고 애플리케이션을 실행합니다."
            },
            {
              title: "계정 연결 (선택 사항)",
              content: "Nuvio Note는 기본적으로 로그인 없이 모든 노트 기능을 사용할 수 있습니다.",
              alert: {
                title: "구글 로그인은 언제 필요한가요?",
                content: "단순한 노트 작성 및 관리 기능만 사용하신다면 로그인이 필요하지 않습니다.\n일정 관리(Google Calendar 연동) 기능을 사용하여 캘린더 일정을 앱에서 확인하고 싶을 때만 로그인이 필요합니다."
              },
              items: [
                "우측 상단의 프로필 아이콘을 클릭합니다.",
                "\"Google로 로그인\" 버튼을 클릭합니다.",
                "브라우저가 열리면 구글 계정으로 로그인하고 권한을 허용합니다.",
                "로그인이 완료되면 프로필 이미지가 표시되고 캘린더 연동이 시작됩니다."
              ]
            },
            {
              title: "인터페이스 둘러보기",
              content: "Nuvio Note는 효율적인 작업을 위해 좌측 내비게이션과 우측 작업 공간으로 구성되어 있습니다.",
              items: [
                "헤더 (Header): 검색창 (키보드 단축키 지원) 및 프로필 설정을 포함합니다.",
                "좌측 패널 (Navigation): 업무 흐름에 따라 ISSUES, TASKS, CALENDAR, TIMELINE 4가지 탭을 제공하며 순서를 변경할 수 있습니다.",
                "우측 패널 (Workspace): 실제 노트 작성 및 상세 확인 공간으로, 탭(Tab) 방식으로 멀티태스킹을 지원합니다."
              ]
            }
          ]
        },
        {
          title: "2. 기능 상세 (Features)",
          intro: "우측 패널은 작업의 성격에 따라 캘린더 상세, 노트, 할 일(TODO), 타임라인의 4가지 뷰를 제공합니다.",
          subsections: [
            {
              title: "검색 (Search)",
              icon: "search",
              items: [
                "통합 검색: 단축키 Cmd + K (macOS) / CTRL K (Windows)를 눌러 활성화하며, 모든 노트와 일정을 한 번에 검색할 수 있습니다.",
                "카테고리 검색: 검색창에서 @를 입력하면 카테고리를 선택할 수 있습니다."
              ]
            },
            {
              title: "캘린더 상세 (Calendar Detail)",
              icon: "calendar",
              content: "구글 캘린더와 연동하여 일정을 관리하고, 미팅 후속 업무(Post-meeting Work)를 체계적으로 정리하기 위한 기능입니다.",
              items: [
                "미팅 상태 관리: WAIT (대기), PROG (진행 중), DONE (완료) 상태로 관리됩니다.",
                "미팅 노트: 일정 카드의 Note 버튼을 클릭하여 회의록을 작성할 수 있습니다.",
                "동기화: 구글 캘린더 변경 사항은 자동 동기화되지 않으므로, 필요시 동기화 아이콘을 클릭해야 합니다."
              ]
            },
            {
              title: "노트 (Note)",
              icon: "note",
              content: "강력한 마크다운 에디터를 제공합니다.",
              items: [
                "작성: 좌측 캘린더의 특정 일자에 대한 업무 노트로 생성됩니다.",
                "고정 (Pin): Pin 버튼을 눌러 다른 날짜에서도 공통으로 노출시킬 수 있습니다.",
                "잠금 (Lock): 편집을 제한하여 실수를 방지합니다.",
                "에디터 기능: EDIT / SPLIT / PREVIEW 모드 및 CHEATSHEET를 지원합니다."
              ]
            },
            {
              title: "할 일 (Todo)",
              icon: "todo",
              items: [
                "통합 관리: ISSUES 및 TASKS 탭과 연동됩니다.",
                "날짜별 관리: 각 날짜에 해야 할 업무를 추가하고 관리합니다.",
                "상태 그룹핑: 진행 상태에 따라 자동으로 그룹핑됩니다."
              ]
            },
            {
              title: "타임라인 (Timeline)",
              icon: "timeline",
              content: "간트 차트(Gantt Chart) 형태로 프로젝트 진행 상황을 시각화합니다.",
              items: [
                "자동 생성: 노트 패널에 특정 양식으로 입력하면 타임라인이 자동으로 그려집니다."
              ],
              codeExample: {
                format: "프로젝트명, 시작일, 종료일\nTASK명, 시작일, 종료일, 담당자1, 담당자2...",
                example: "웹사이트 리뉴얼, 2024-01-01, 2024-03-31\n디자인 시안, 2024-01-01, 2024-01-15, 김철수, 이영희\n프론트엔드 개발, 2024-01-16, 2024-02-28, 박지성"
              }
            }
          ]
        },
        {
          title: "3. 설정 (Settings)",
          content: "좌측 하단의 설정(톱니바퀴) 아이콘을 눌러 환경을 설정할 수 있습니다.",
          items: [
            "테마: 라이트, 다크, 시스템 설정 지원.",
            "언어: 한국어, 영어, 일본어 지원.",
            "에디터: 폰트 종류 및 크기 조절.",
            "데이터: 노트 백업 및 내보내기."
          ]
        }
      ]
    },
    terms: {
      title: "서비스 이용약관",
      intro: "본 약관은 Nuvio Note(이하 \"회사\")가 제공하는 서비스의 이용과 관련하여 회사와 회원 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.",
      sections: [
        {
          title: "제1조 (목적)",
          content: "이 약관은 회사가 운영하는 Nuvio Note 서비스(이하 \"서비스\")를 이용함에 있어 회사와 이용자의 권리·의무 및 책임사항을 규정함을 목적으로 합니다."
        },
        {
          title: "제2조 (용어의 정의)",
          items: [
            "\"서비스\"란 단말기(PC, 휴대형단말기 등 각종 유무선 장치를 포함)에 상관없이 회원이 이용할 수 있는 Nuvio Note 및 관련 제반 서비스를 의미합니다.",
            "\"회원\"이란 회사의 서비스에 접속하여 이 약관에 따라 회사와 이용계약을 체결하고 회사가 제공하는 서비스를 이용하는 고객을 말합니다.",
            "\"게시물\"이란 회원이 서비스를 이용함에 있어 서비스상에 게시한 부호·문자·음성·음향·화상·동영상 등의 정보 형태의 글, 사진, 동영상 및 각종 파일과 링크 등을 의미합니다."
          ]
        },
        {
          title: "제3조 (약관의 게시와 개정)",
          items: [
            "회사는 이 약관의 내용을 회원이 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다.",
            "회사는 「약관의 규제에 관한 법률」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 등 관련 법령을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.",
            "회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 제1항의 방식에 따라 적용일자 7일 전부터 적용일자 전일까지 공지합니다."
          ]
        },
        {
          title: "제4조 (회사의 의무)",
          items: [
            "회사는 관련 법령과 이 약관이 금지하거나 미풍양속에 반하는 행위를 하지 않으며, 계속적이고 안정적으로 서비스를 제공하기 위하여 최선을 다하여 노력합니다.",
            "회사는 회원이 안전하게 서비스를 이용할 수 있도록 개인정보 보호를 위한 보안 시스템을 갖추어야 하며 개인정보처리방침을 준수합니다."
          ]
        },
        {
          title: "제5조 (회원의 의무)",
          content: "회원은 다음 행위를 하여서는 안 됩니다.",
          items: [
            "신청 또는 변경 시 허위내용의 등록",
            "타인의 정보 도용",
            "회사가 게시한 정보의 변경",
            "회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시",
            "회사 및 기타 제3자의 저작권 등 지식재산권에 대한 침해",
            "회사 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위"
          ]
        },
        {
          title: "제6조 (저작권의 귀속)",
          items: [
            "회원이 서비스 내에 게시한 게시물의 저작권은 해당 게시물의 저작자에게 귀속됩니다.",
            "회사가 작성한 저작물에 대한 저작권 기타 지식재산권은 회사에 귀속합니다."
          ]
        },
        {
          title: "제7조 (면책조항)",
          items: [
            "회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.",
            "회사는 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.",
            "회사는 무료로 제공되는 서비스 이용과 관련하여 관련 법령에 특별한 규정이 없는 한 책임을 지지 않습니다."
          ]
        }
      ],
      date: "공고일자: 2025년 12월 25일\n시행일자: 2025년 12월 25일"
    }
  },
  ja: {
    nav: { features: "主な機能", download: "ダウンロード", guide: "ユーザーガイド" },
    hero: {
      title: "あなたの記録、{transformed}へ",
      transformed: "深い洞察",
      subtitle: "散らばったスケジュールとノートを一つの文脈に繋げます。集中と明快さのために設計されたワークスペースで、あなたの記録に隠された新しい意味を発見してください。",
      downloadMac: "macOS版ダウンロード",
      downloadWin: "Windows版ダウンロード",
      comingSoon: "近日公開",
      mockup: {
        calendar: "カレンダー",
        tasks: "タスク",
        timeline: "タイムライン",
        noEvents: "予定なし",
        todayMeeting: "今日の会議",
        emptyNotes: "ノートが空です"
      },
    },
    modal: {
      title: "リリース通知を受け取る",
      description: "Nuvio Noteがリリースされたら一番にお知らせします。",
      placeholder: "メールアドレスを入力",
      submit: "通知を受け取る",
      successTitle: "登録完了！",
      successDesc: "ありがとうございます。最新情報をお届けします。",
      close: "閉じる",
      error: "登録に失敗しました。もう一度お試しください。",
      privacy: "スパムメールは送信しません。"
    },
    features: {
      title: "主な機能",
      subtitle: "あなたのデジタルライフをエレガントかつスピーディーに整理するために、考え抜かれた機能を提供します。",
      items: [
        { title: "ローカルストレージ", desc: "あなたの考えはあなただけのものです。すべてのデータはデバイス上で暗号化され、サーバーに送信されることはありません。" },
        { title: "マークダウンエディタ", desc: "ライブプレビューと集中モードにより、クリーンで効率的な執筆体験を提供します。" },
        { title: "カレンダー同期", desc: "GoogleカレンダーやOutlookとシームレスに統合し、人生のタイムラインを一元化します。" },
        { title: "タイムラインビュー", desc: "洗練されたガントチャートスタイルで目標とスケジュールを視覚化し、計画を容易にします。" },
        { title: "高速検索", desc: "超高速な全文検索。強力なフィルターで、どんなノートやタスクも瞬時に見つけ出します。" },

      ]
    },
    cta: {
      title: "{powerful}と共に、まもなく登場",
      powerful: "より強力な機能",
      subtitle: "より良い体験のために、プレミアム機能のアップデートを準備しています。公開までもうしばらくお待ちください。",
      button: "公開を通知する"
    },
    footer: {
      privacy: "プライバシーポリシー",
      terms: "利用規約",
      contact: "お問い合わせ",
      rights: "無断複写・転載を禁じます。"
    },
    privacy: {
      title: "プライバシーポリシー",
      intro: "Nuvio Note（以下「当社」といいます）は、ユーザーの個人情報保護を非常に重要視し、『個人情報保護法』など関連法令を遵守しています。当社は、本プライバシーポリシーを通じて、ユーザーが提供する個人情報がどのような用途と方式で利用されており、個人情報保護のためにどのような措置が取られているかをお知らせします。",
      sections: [
        {
          title: "1. 収集する個人情報項目および収集方法",
          subsections: [
            {
              title: "A. 収集する個人情報項目",
              items: [
                "会員登録時：名前、メールアドレス、パスワード、プロフィール写真",
                "サービス利用過程：サービス利用記録、アクセスログ、Cookie、接続IP情報、端末情報",
                "Googleアカウント連携時：GoogleユーザーID、メールアドレス、プロフィール情報、Googleカレンダーの予定情報（ユーザー同意時）"
              ]
            },
            {
              title: "B. 個人情報収集方法",
              content: "ウェブサイト/アプリ会員登録、サービス利用、提携会社からの提供、生成情報収集ツールによる収集"
            }
          ]
        },
        {
          title: "2. 個人情報の収集および利用目的",
          items: [
            "サービス提供：コンテンツ提供、カスタマイズされたサービス提供、サービス利用に伴う本人認証",
            "会員管理：会員制サービス利用に伴う本人確認、個人識別、加入意思の確認、不良会員の不正利用防止",
            "新規サービス開発およびマーケティング：新規サービス開発およびカスタマイズサービス提供、統計学的特性によるサービス提供、イベントおよび広告性情報の提供"
          ]
        },
        {
          title: "3. 個人情報の保有および利用期間",
          content: "当社は、法令による個人情報保有・利用期間または情報主体から個人情報を収集する際に同意を得た個人情報保有・利用期間内で個人情報を保有・利用します。",
          items: [
            "会員退会時まで（ただし、関係法令に違反したり捜査機関の要請がある場合は、当該事由終了時まで）",
            "関係法令違反による捜査・調査などが進行中の場合は、当該捜査・調査終了時まで",
            "サービス利用に伴う債権・債務関係残存時には、当該債権・債務関係精算時まで"
          ]
        },
        {
          title: "4. Googleユーザーデータポリシー",
          content: "Nuvio Noteは、Google APIから受け取った情報の使用および他のアプリへの転送を含め、{link}を遵守します（制限された使用要件を含む）。",
          linkText: "Google APIサービスユーザーデータポリシー（Google API Services User Data Policy）",
          calendarData: "ユーザーのGoogleカレンダーデータは、ユーザーの明示的な同意の下、アプリ内のスケジュール管理機能を提供するためにのみ使用され、第三者に販売されたり広告目的で使用されたりすることはありません。"
        },
        {
          title: "5. 利用者の権利と行使方法",
          content: "利用者はいつでも登録されている自分の個人情報を照会したり修正したりすることができ、登録解除を要求することができます。",
          items: [
            "個人情報の照会/修正：アプリ内の「設定 > プロフィール」メニューを利用",
            "会員退会：アプリ内の「アカウント削除」機能を利用またはカスタマーセンターにお問い合わせ"
          ]
        },
        {
          title: "6. 個人情報保護責任者",
          content: "当社は、個人情報処理に関する業務を総括して責任を負い、個人情報処理に関連する情報主体の苦情処理および被害救済などのために、以下のように個人情報保護責任者を指定しています。",
          manager: "担当者：個人情報管理担当者",
          email: "メール：support@nuvio.now"
        }
      ],
      date: "公告日：2025年12月25日\n施行日：2025年12月25日"
    },
    guide: {
      title: "Nuvio Note ユーザーガイド",
      intro: "Nuvio Noteは、業務に関する記録を残し、会議で議論された内容をToDoのように体系的に管理できるアプリケーションです。\nまた、強力な検索機能を提供し、いつでも素早くメモの内容を確認できます。",
      sections: [
        {
          title: "1. はじめに (Getting Started)",
          subsections: [
            {
              title: "インストールと実行",
              content: "ダウンロードしたインストールファイル（Nuvio Note.exe または Nuvio Note.dmg）を実行してインストールを完了し、アプリケーションを起動します。"
            },
            {
              title: "アカウント連携（オプション）",
              content: "Nuvio Noteは、基本的にログインなしですべてのノート機能を使用できます。",
              alert: {
                title: "Googleログインはいつ必要ですか？",
                content: "単純なノート作成および管理機能のみを使用する場合、ログインは不要です。\nスケジュール管理（Googleカレンダー連携）機能を使用してアプリでカレンダーの予定を確認したい場合にのみログインが必要です。"
              },
              items: [
                "右上のプロフィールアイコンをクリックします。",
                "「Googleでログイン」ボタンをクリックします。",
                "ブラウザが開いたら、Googleアカウントでログインして権限を許可します。",
                "ログインが完了するとプロフィール画像が表示され、カレンダー連携が開始されます。"
              ]
            },
            {
              title: "インターフェース概要",
              content: "Nuvio Noteは、効率的な作業のために左側のナビゲーションと右側のワークスペースで構成されています。",
              items: [
                "ヘッダー (Header)：検索（Cmd+K / Ctrl+K）およびプロフィール/設定を含みます。",
                "左パネル (Navigation)：業務フローに合わせてISSUES、TASKS、CALENDAR、TIMELINEの4つのタブを提供し、順序を変更できます。",
                "右パネル (Workspace)：実際のノート作成および詳細確認を行うスペースで、タブ（Tab）方式でマルチタスクをサポートします。"
              ]
            }
          ]
        },
        {
          title: "2. 機能詳細 (Features)",
          intro: "右パネルは、作業の性質に応じてカレンダー詳細、ノート、ToDo、タイムラインの4つのビューを提供します。",
          subsections: [
            {
              title: "検索 (Search)",
              icon: "search",
              items: [
                "統合検索：ショートカットキー Cmd+K (macOS) / Ctrl+K (Windows) で有効化し、すべてのノートと予定を一度に検索できます。",
                "カテゴリ検索：検索バーで @ を入力するとカテゴリを選択できます。"
              ]
            },
            {
              title: "カレンダー詳細 (Calendar Detail)",
              icon: "calendar",
              content: "Googleカレンダーと連携して予定を管理し、会議後のフォローアップ業務（Post-meeting Work）を体系的に整理するための機能です。",
              items: [
                "会議状態管理：WAIT（待機）、PROG（進行中）、DONE（完了）状態で管理されます。",
                "会議ノート：予定カードのNoteボタンをクリックして、議事録を作成できます。",
                "同期：Googleカレンダーの変更内容は自動同期されないため、必要に応じて同期アイコンをクリックしてください。"
              ]
            },
            {
              title: "ノート (Note)",
              icon: "note",
              content: "強力なマークダウンエディタを提供します。",
              items: [
                "作成：左側のカレンダーで選択した日付の業務ノートとして生成されます。",
                "固定 (Pin)：Pinボタンを押して、他の日付でも共通して表示させることができます。",
                "ロック (Lock)：編集を制限して、誤操作を防止します。",
                "エディタ機能：EDIT / SPLIT / PREVIEW モードおよびCHEATSHEETをサポートします。"
              ]
            },
            {
              title: "ToDo (Todo)",
              icon: "todo",
              items: [
                "統合管理：ISSUESおよびTASKSタブと連動します。",
                "日付別管理：各日付に行うべき業務を追加・管理します。",
                "状態グルーピング：進行状態に応じて自動的にグループ化されます。"
              ]
            },
            {
              title: "タイムライン (Timeline)",
              icon: "timeline",
              content: "ガントチャート形式でプロジェクトの進行状況を可視化します。",
              items: [
                "自動生成：ノートパネルに特定の形式で入力すると、タイムラインが自動的に描画されます。"
              ],
              codeExample: {
                format: "プロジェクト名, 開始日, 終了日\nタスク名, 開始日, 終了日, 担当者1, 担当者2...",
                example: "ウェブサイトリニューアル, 2024-01-01, 2024-03-31\nデザイン案, 2024-01-01, 2024-01-15, 田中, 佐藤\nフロントエンド開発, 2024-01-16, 2024-02-28, 鈴木"
              }
            }
          ]
        },
        {
          title: "3. 設定 (Settings)",
          content: "左下の設定（歯車）アイコンを押して環境を設定できます。",
          items: [
            "テーマ：ライト、ダーク、システム設定をサポート。",
            "言語：韓国語、英語、日本語をサポート。",
            "エディタ：フォントの種類とサイズを調整。",
            "データ：ノートのバックアップおよびエクスポート。"
          ]
        }
      ]
    },
    terms: {
      title: "利用規約",
      intro: "本規約は、Nuvio Note（以下「当社」）が提供するサービスの利用に関連して、当社と会員との間の権利、義務および責任事項、その他必要な事項を規定することを目的とします。",
      sections: [
        {
          title: "第1条（目的）",
          content: "本規約は、当社が運営するNuvio Noteサービス（以下「サービス」）を利用するにあたり、当社と利用者の権利・義務および責任事項を規定することを目的とします。"
        },
        {
          title: "第2条（用語の定義）",
          items: [
            "「サービス」とは、端末（PC、携帯型端末など各種有線・無線装置を含む）に関わらず、会員が利用できるNuvio Noteおよび関連諸般のサービスを意味します。",
            "「会員」とは、当社のサービスに接続して本規約に従って当社と利用契約を締結し、当社が提供するサービスを利用する顧客をいいます。",
            "「掲示物」とは、会員がサービスを利用するにあたり、サービス上に掲示した符号・文字・音声・音響・画像・動画などの情報形態の文章、写真、動画および各種ファイルとリンクなどを意味します。"
          ]
        },
        {
          title: "第3条（規約の掲示と改定）",
          items: [
            "当社は、本規約の内容を会員が容易に知ることができるように、サービスの初期画面に掲示します。",
            "当社は、「約款の規制に関する法律」、「情報通信網利用促進および情報保護等に関する法律」など関連法令に違反しない範囲で、本規約を改定することができます。",
            "当社が規約を改定する場合には、適用日および改定事由を明示して、現行規約と共に第1項の方式に従って適用日の7日前から適用日の前日まで告知します。"
          ]
        },
        {
          title: "第4条（当社の義務）",
          items: [
            "当社は、関連法令と本規約が禁止したり公序良俗に反する行為をせず、継続的かつ安定的にサービスを提供するために最善を尽くします。",
            "当社は、会員が安全にサービスを利用できるように、個人情報保護のためのセキュリティシステムを備えなければならず、プライバシーポリシーを遵守します。"
          ]
        },
        {
          title: "第5条（会員の義務）",
          content: "会員は、次の行為をしてはなりません。",
          items: [
            "申請または変更時の虚偽内容の登録",
            "他人の情報の盗用",
            "当社が掲示した情報の変更",
            "当社が定めた情報以外の情報(コンピュータプログラムなど)等の送信または掲示",
            "当社およびその他第三者の著作権など知的財産権に対する侵害",
            "当社およびその他第三者の名誉を毀損したり業務を妨害する行為"
          ]
        },
        {
          title: "第6条（著作権の帰属）",
          items: [
            "会員がサービス内に掲示した掲示物の著作権は、当該掲示物の著作者に帰属します。",
            "当社が作成した著作物に対する著作権その他知的財産権は、当社に帰属します。"
          ]
        },
        {
          title: "第7条（免責条項）",
          items: [
            "当社は、天災地変またはこれに準ずる不可抗力によりサービスを提供できない場合には、サービス提供に関する責任が免除されます。",
            "当社は、会員の帰責事由によるサービス利用の障害については責任を負いません。",
            "当社は、無料で提供されるサービス利用に関連して、関連法令に特別な規定がない限り責任を負いません。"
          ]
        }
      ],
      date: "公告日：2025年12月25日\n施行日：2025年12月25日"
    }
  }
};

export type Language = keyof typeof translations;
