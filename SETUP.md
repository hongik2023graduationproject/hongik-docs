# VitePress 문서 사이트 설정 가이드

이 문서는 hong-ik 문서 사이트 설정 및 로컬 개발 환경 구성 방법을 설명합니다.

## 프로젝트 구조

```
hongik-docs/
├── docs/                                 # 문서 콘텐츠 디렉토리
│   ├── index.md                          # 홈 페이지 (랜딩 페이지)
│   ├── .vitepress/                       # VitePress 설정 폴더
│   │   ├── config.js                     # VitePress 설정 파일
│   │   └── theme/                        # 테마 커스터마이징 (선택사항)
│   │
│   ├── getting-started/                  # 시작하기 섹션
│   │   ├── introduction.md               # 소개
│   │   ├── installation.md               # 설치 & 빌드
│   │   ├── first-program.md              # 첫 프로그램
│   │   └── repl.md                       # REPL 모드
│   │
│   ├── language-reference/               # 언어 레퍼런스 섹션
│   │   ├── types.md                      # 타입 시스템
│   │   ├── integer.md                    # 정수 (작성 예정)
│   │   ├── float.md                      # 실수 (작성 예정)
│   │   ├── string.md                     # 문자 (작성 예정)
│   │   ├── boolean.md                    # 논리 (작성 예정)
│   │   ├── if-else.md                    # 조건문 (작성 예정)
│   │   ├── while.md                      # while 반복 (작성 예정)
│   │   ├── for-range.md                  # for 반복 (작성 예정)
│   │   ├── foreach.md                    # foreach 반복 (작성 예정)
│   │   ├── match.md                      # match 문 (작성 예정)
│   │   ├── functions.md                  # 함수 (작성 예정)
│   │   ├── parameters.md                 # 매개변수 (작성 예정)
│   │   ├── higher-order-functions.md     # 고차 함수 (작성 예정)
│   │   ├── classes.md                    # 클래스 (작성 예정)
│   │   ├── inheritance.md                # 상속 (작성 예정)
│   │   ├── constructor.md                # 생성자 (작성 예정)
│   │   ├── array.md                      # 배열 (작성 예정)
│   │   ├── dictionary.md                 # 사전 (작성 예정)
│   │   ├── tuple.md                      # 튜플 (작성 예정)
│   │   ├── exception-handling.md         # 예외 처리 (작성 예정)
│   │   ├── modules.md                    # 모듈 (작성 예정)
│   │   └── vm.md                         # 바이트코드 VM (작성 예정)
│   │
│   ├── builtin-functions/                # 내장 함수 섹션
│   │   ├── io.md                         # I/O 함수
│   │   ├── type-conversion.md            # 타입 변환 (작성 예정)
│   │   ├── array.md                      # 배열 함수 (작성 예정)
│   │   ├── string.md                     # 문자열 함수 (작성 예정)
│   │   ├── math.md                       # 수학 함수 (작성 예정)
│   │   ├── higher-order.md               # 고차 함수 (작성 예정)
│   │   └── file-io.md                    # 파일 I/O (작성 예정)
│   │
│   ├── tutorials/                        # 튜토리얼 섹션
│   │   ├── basics-variables.md           # 변수와 타입
│   │   ├── basics-operators.md           # 연산자 (작성 예정)
│   │   ├── basics-conditionals.md        # 조건문 (작성 예정)
│   │   ├── intermediate-functions.md     # 함수 작성 (작성 예정)
│   │   ├── intermediate-arrays.md        # 배열과 반복 (작성 예정)
│   │   ├── intermediate-higher-order.md  # 고차 함수 (작성 예정)
│   │   ├── advanced-oop.md               # 클래스와 상속 (작성 예정)
│   │   ├── advanced-exceptions.md        # 예외 처리 (작성 예정)
│   │   └── advanced-projects.md          # 프로젝트 예제 (작성 예정)
│   │
│   └── public/                           # 정적 파일 (로고 등)
│       └── logo.svg                      # (추가 필요)
│
├── .github/
│   └── workflows/
│       └── deploy.yml                    # GitHub Pages 자동 배포
│
├── package.json                          # npm 설정
├── .gitignore                            # Git 무시 파일
├── README.md                             # 프로젝트 README
└── SETUP.md                              # 이 파일
```

## 로컬 개발 환경 설정

### 필수 소프트웨어

1. **Node.js** (16.0 이상)
   - https://nodejs.org/en/download/
   - 확인: `node --version`

2. **npm** (7.0 이상)
   - Node.js와 함께 설치됨
   - 확인: `npm --version`

### 설치 및 실행 (첫 시간)

```bash
# 프로젝트 디렉토리로 이동
cd hongik-docs

# 의존성 설치
npm install

# 개발 서버 시작
npm run docs:dev
```

브라우저에서 `http://localhost:5173`으로 접속하면 문서 사이트를 볼 수 있습니다.

### 상시 개발

```bash
# 개발 모드로 실행 (핫 리로드 지원)
npm run docs:dev
```

- 파일 수정 시 브라우저가 자동으로 새로고침됩니다
- `Ctrl+C`로 서버 중지

### 빌드 및 배포 테스트

```bash
# 프로덕션 빌드
npm run docs:build

# 빌드 결과 미리보기
npm run docs:preview
```

빌드 결과는 `docs/.vitepress/dist/` 디렉토리에 생성됩니다.

## GitHub Pages 자동 배포

`.github/workflows/deploy.yml`이 설정되어 있습니다.

### 배포 과정

1. `main` 브랜치에 `docs/` 파일 수정 후 push
2. GitHub Actions가 자동으로:
   - 문서 빌드
   - GitHub Pages에 배포
3. 약 2-5분 후 웹사이트 업데이트됨

### GitHub Pages 설정

1. GitHub 저장소 → Settings → Pages
2. Source: `Deploy from a branch`
3. Branch: `gh-pages` (자동으로 생성됨)
4. Save

## 문서 작성 방법

### 새 페이지 추가

1. 적절한 디렉토리에 마크다운 파일 생성
   ```bash
   touch docs/language-reference/new-topic.md
   ```

2. 마크다운 콘텐츠 작성
   ```markdown
   # 제목

   ## 소제목

   이것은 **굵은 텍스트**입니다.

   ### 코드 예제

   \`\`\`hik
   정수 x = 10
   출력(x)
   \`\`\`
   ```

3. `docs/.vitepress/config.js`의 사이드바에 추가
   ```js
   sidebar: {
     '/language-reference/': [
       {
         text: '기본 타입',
         items: [
           { text: '새 토픽', link: '/language-reference/new-topic' },
         ],
       },
     ],
   }
   ```

4. `npm run docs:dev`로 확인

### 마크다운 문법

- **헤딩**: `# H1`, `## H2`, `### H3` 등
- **굵게**: `**텍스트**`
- **기울임**: `*텍스트*`
- **코드**: `` `code` ``
- **코드 블록**: ` ```language ... ``` `
- **리스트**: `- 항목` 또는 `1. 항목`
- **표**: Markdown 표 문법 사용
- **링크**: `[텍스트](URL)`

## 작업 예정 항목

### Phase 1 (완료) ✅
- ✅ VitePress 초기 설정
- ✅ 랜딩 페이지 (홈)
- ✅ 기본 네비게이션 구조
- ✅ Getting Started (4페이지)
- ✅ 타입 시스템 개요
- ✅ I/O 함수
- ✅ 기초 튜토리얼 (1페이지)
- ✅ GitHub Actions 배포 설정

### Phase 2 (진행 중) 🚀
- [ ] 언어 레퍼런스 전체 문서 작성 (17페이지)
- [ ] 내장 함수 전체 문서 작성 (6페이지)
- [ ] 튜토리얼 확대 (8페이지 추가)
- [ ] 로고/아이콘 디자인 및 추가
- [ ] 영어 번역 시작 (핵심 문서)

### Phase 3 (향후) 📅
- [ ] 플레이그라운드 통합 (WASM)
- [ ] "Try it" 버튼 추가
- [ ] 영어 번역 완료
- [ ] SEO 최적화
- [ ] 커스텀 도메인 설정

## 성능 최적화 팁

- 이미지는 WebP 포맷 사용
- 코드 예제는 너무 길지 않게 (10-20줄)
- 내부 링크 활용으로 문서 간 연결
- 사이드바는 3-4 레벨 이내로 유지

## 문제 해결

**포트 5173이 이미 사용 중**
```bash
npm run docs:dev -- --port 5174
```

**의존성 문제**
```bash
rm -rf node_modules package-lock.json
npm install
```

**빌드 오류**
```bash
npm run docs:build 2>&1 | head -50
```

## 참고 자료

- [VitePress 공식 문서](https://vitepress.dev/)
- [Markdown 문법](https://www.markdownguide.org/)
- [GitHub Pages](https://pages.github.com/)

## 기여 가이드

문서 개선에 기여하려면:

1. 포크 후 브랜치 생성
2. 변경사항 커밋
3. Pull Request 제출

감사합니다!
