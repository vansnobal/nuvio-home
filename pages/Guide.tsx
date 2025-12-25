
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Guide: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#F8F7F2] dark:bg-[#121212] transition-colors duration-300">
            <Navbar />
            <main className="max-w-4xl mx-auto px-6 py-24">
                <h1 className="text-4xl font-bold mb-8 text-[#2D2D2D] dark:text-[#E2E0D8]">Nuvio Note 사용자 가이드</h1>
                <div className="prose dark:prose-invert max-w-none text-[#4B5563] dark:text-[#9CA3AF]">
                    <p className="mb-4">
                        Nuvio Note는 업무와 관련된 기록을 남기고, 미팅에서 논의되는 내용을 마치 할 일(TODO)처럼 체계적으로 관리할 수 있는 애플리케이션입니다.
                        또한, 강력한 검색 기능을 제공하여 언제든지 빠르게 메모 내용을 확인할 수 있습니다.
                    </p>

                    <hr className="my-8 border-[#E2E0D8] dark:border-[#2D2D2D]" />

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6 text-[#2D2D2D] dark:text-[#E2E0D8]">1. 시작하기 (Getting Started)</h2>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-3 text-[#3C4A57] dark:text-[#D1D5DB]">설치 및 실행</h3>
                            <p>다운로드한 설치 파일(<code>Nuvio Note.exe</code> 또는 <code>Nuvio Note.dmg</code>)을 실행하여 설치를 완료하고 애플리케이션을 실행합니다.</p>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-3 text-[#3C4A57] dark:text-[#D1D5DB]">계정 연결 (선택 사항)</h3>
                            <p className="mb-4">Nuvio Note는 기본적으로 <strong>로그인 없이</strong> 모든 노트 기능을 사용할 수 있습니다.</p>

                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500 mb-4">
                                <p className="font-semibold text-blue-700 dark:text-blue-300 mb-2">구글 로그인은 언제 필요한가요?</p>
                                <p className="text-sm">단순한 노트 작성 및 관리 기능만 사용하신다면 로그인이 필요하지 않습니다.<br />
                                    <strong>일정 관리(Google Calendar 연동)</strong> 기능을 사용하여 캘린더 일정을 앱에서 확인하고 싶을 때만 로그인이 필요합니다.</p>
                            </div>

                            <ol className="list-decimal pl-5 space-y-2">
                                <li>우측 상단의 <strong>프로필 아이콘</strong>을 클릭합니다.</li>
                                <li><strong>"Google로 로그인"</strong> 버튼을 클릭합니다.</li>
                                <li>브라우저가 열리면 구글 계정으로 로그인하고 권한을 허용합니다.</li>
                                <li>로그인이 완료되면 프로필 이미지가 표시되고 캘린더 연동이 시작됩니다.</li>
                            </ol>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-3 text-[#3C4A57] dark:text-[#D1D5DB]">인터페이스 둘러보기</h3>
                            <p className="mb-4">Nuvio Note는 효율적인 작업을 위해 <strong>좌측 내비게이션</strong>과 <strong>우측 작업 공간</strong>으로 구성되어 있습니다.</p>

                            <ul className="list-disc pl-5 space-y-4">
                                <li>
                                    <strong>헤더 (Header)</strong>:
                                    <ul className="list-circle pl-5 mt-2 space-y-1">
                                        <li><strong>검색창 (중앙)</strong>: 단축키 <code>Cmd + K</code> (macOS) / <code>CTRL K</code> (Windows)를 누르거나 검색창을 클릭하여 모든 노트와 일정을 빠르게 검색할 수 있습니다.</li>
                                        <li><strong>프로필 및 설정 (우측)</strong>: 구글 로그인 상태를 확인하거나 설정 메뉴로 진입합니다.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>좌측 패널 (Navigation)</strong>:
                                    <ul className="list-circle pl-5 mt-2 space-y-1">
                                        <li>업무 흐름에 따라 <strong>ISSUES, TASKS, CALENDAR, TIMELINE</strong> 4가지 탭을 제공합니다.</li>
                                        <li>각 탭은 드래그 앤 드롭으로 순서를 변경할 수 있습니다.</li>
                                        <li>캘린더 뷰나 리스트 뷰를 통해 날짜별 업무를 선택합니다.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>우측 패널 (Workspace)</strong>:
                                    <ul className="list-circle pl-5 mt-2 space-y-1">
                                        <li>실제 <strong>노트 작성 및 상세 확인</strong>이 이루어지는 공간입니다.</li>
                                        <li>브라우저처럼 <strong>탭(Tab)</strong> 방식으로 여러 노트나 일정을 동시에 열어두고 작업할 수 있습니다.</li>
                                        <li>선택한 날짜의 할 일(To-do)과 노트 에디터가 표시됩니다.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <hr className="my-8 border-[#E2E0D8] dark:border-[#2D2D2D]" />

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6 text-[#2D2D2D] dark:text-[#E2E0D8]">2. 기능 상세 (Features)</h2>
                        <p className="mb-6">우측 패널은 작업의 성격에 따라 <strong>캘린더 상세, 노트, 할 일(TODO), 타임라인</strong>의 4가지 뷰를 제공합니다.</p>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-3 text-[#3C4A57] dark:text-[#D1D5DB]">🔍 검색 (Search)</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>통합 검색</strong>: 단축키 <code>Cmd + K</code> (macOS) / <code>CTRL K</code> (Windows)를 눌러 활성화하며, 모든 노트와 일정을 한 번에 검색할 수 있습니다.</li>
                                <li><strong>카테고리 검색</strong>: 검색창에서 <strong>@</strong>를 입력하면 카테고리를 선택할 수 있습니다. 카테고리를 선택 후 검색 키워드를 입력하면 카테고리 내 검색을 수행할 수 있습니다.</li>
                            </ul>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-3 text-[#3C4A57] dark:text-[#D1D5DB]">📅 캘린더 상세 (Calendar Detail)</h3>
                            <p className="mb-4">구글 캘린더와 연동하여 일정을 관리하고, <strong>미팅 후속 업무(Post-meeting Work)</strong>를 체계적으로 정리하기 위한 기능입니다. 단순한 일정 확인을 넘어, 각 미팅을 하나의 할 일(TODO)처럼 관리할 수 있습니다.</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>
                                    <strong>미팅 상태 관리</strong>: 각 일정은 진행 단계에 따라 3가지 상태로 관리됩니다.
                                    <ul className="list-circle pl-5 mt-1 space-y-1">
                                        <li><strong>WAIT (대기)</strong>: 미팅 종료 후, 정리해야 할 내용이나 후속 업무가 남아있는 상태입니다.</li>
                                        <li><strong>PROG (진행 중)</strong>: 현재 미팅 내용을 정리하거나 후속 업무를 처리하고 있는 상태입니다.</li>
                                        <li><strong>DONE (완료)</strong>: 미팅 관련 정리가 모두 마무리된 상태입니다.</li>
                                    </ul>
                                </li>
                                <li><strong>미팅 노트 (Meeting Notes)</strong>: 각 일정 카드에는 <strong>Note</strong> 버튼이 있습니다. 이를 클릭하면 해당 미팅의 회의록을 바로 작성할 수 있는 새 노트가 생성되고 연결됩니다.</li>
                                <li><strong>동기화 (Sync)</strong>: 구글 캘린더의 변경 사항은 <strong>자동으로 동기화되지 않습니다</strong>. 최신 상태를 반영하려면 필요시 좌측 상단의 <strong>동기화 아이콘</strong>을 클릭해야 합니다.</li>
                            </ul>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-3 text-[#3C4A57] dark:text-[#D1D5DB]">📝 노트 (Note)</h3>
                            <p className="mb-4">Nuvio Note는 강력한 마크다운 에디터를 제공합니다.</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>작성 및 관리</strong>: 노트는 <strong>좌측 캘린더의 특정 일자의 업무 노트</strong>로 생성됩니다.</li>
                                <li><strong>고정 (Pin)</strong>: 만일 특정 노트가 다른 날짜에서도 공통으로 보여야 한다면, <strong>Pin 버튼</strong>을 눌러 다른 날짜에서도 공통으로 노출시킬 수 있습니다.</li>
                                <li><strong>잠금 (Lock)</strong>: <strong>Lock 버튼</strong>을 누르면 편집이 제한되어, 의도치 않은 업데이트 실수를 차단할 수 있습니다.</li>
                                <li><strong>에디터 기능</strong>: 기본적으로 마크다운을 지원하며, <strong>EDIT / SPLIT / PREVIEW</strong> 형태로 뷰를 변경할 수 있습니다. 또한 <strong>CHEATSHEET</strong>를 통해 마크다운에 익숙하지 않은 사용자도 쉽게 도움을 받을 수 있습니다.</li>
                            </ul>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-3 text-[#3C4A57] dark:text-[#D1D5DB]">✅ 할 일 (Todo)</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>통합 관리</strong>: <strong>ISSUES</strong> 및 <strong>TASKS</strong> 탭과 연동되어 모든 할 일을 한곳에서 볼 수 있습니다.</li>
                                <li><strong>날짜별 관리</strong>: 각 날짜에 해야 할 업무를 추가할 수 있으며, 이 곳에서 일정을 체계적으로 관리합니다.</li>
                                <li><strong>상태 그룹핑</strong>: 업무의 진행 상태에 따라 자동으로 그룹핑되어 표시되므로, 우선순위를 쉽게 파악할 수 있습니다.</li>
                            </ul>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-3 text-[#3C4A57] dark:text-[#D1D5DB]">📊 타임라인 (Timeline)</h3>
                            <p className="mb-4">프로젝트의 진행 상황을 <strong>간트 차트(Gantt Chart)</strong> 형태로 시각화하여 보여줍니다.</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>자동 생성</strong>: 우측 노트 패널에 아래와 같은 형식으로 입력하면, 좌측 패널에 타임라인이 자동으로 그려집니다.</li>
                            </ul>
                            <div className="bg-[#F1EFE7] dark:bg-[#1E1E1E] p-4 rounded-lg mt-4 font-mono text-sm border border-[#E2E0D8] dark:border-[#2D2D2D]">
                                <p className="mb-2 text-xs text-gray-500">입력 양식:</p>
                                <pre className="whitespace-pre-wrap">
                                    프로젝트명, 시작일, 종료일
                                    TASK명, 시작일, 종료일, 담당자1, 담당자2...
                                </pre>
                                <p className="mt-4 mb-2 text-xs text-gray-500">예시:</p>
                                <pre className="whitespace-pre-wrap">
                                    웹사이트 리뉴얼, 2024-01-01, 2024-03-31
                                    디자인 시안, 2024-01-01, 2024-01-15, 김철수, 이영희
                                    프론트엔드 개발, 2024-01-16, 2024-02-28, 박지성
                                </pre>
                            </div>
                        </div>
                    </section>

                    <hr className="my-8 border-[#E2E0D8] dark:border-[#2D2D2D]" />

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6 text-[#2D2D2D] dark:text-[#E2E0D8]">3. 설정 (Settings)</h2>
                        <p className="mb-4">좌측 하단의 <strong>설정(톱니바퀴)</strong> 아이콘을 눌러 환경을 설정할 수 있습니다.</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>테마</strong>: 라이트 모드, 다크 모드, 또는 시스템 설정을 따르도록 변경할 수 있습니다.</li>
                            <li><strong>언어</strong>: 한국어, 영어 및 일본어를 지원합니다.</li>
                            <li><strong>에디터</strong>: 폰트 종류, 크기 등을 내 취향에 맞게 조절할 수 있습니다.</li>
                            <li><strong>데이터</strong>: 작성한 노트를 백업하거나 내보낼 수 있는 기능을 제공합니다.</li>
                        </ul>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Guide;
