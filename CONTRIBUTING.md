# Contributing to hongik-docs

홍익 프로그래밍 언어 공식 문서 사이트 (VitePress 기반).

## 개발 환경 세팅

### 필수 도구

- Node.js 20+
- npm 10+

### 시작하기

```bash
git clone https://github.com/hongik2023graduationproject/hongik-docs.git
cd hongik-docs
npm install
npm run docs:dev          # http://localhost:5173
```

## 문서 구조

```
docs/
├── index.md                          # 랜딩
├── getting-started/                  # 설치 + 첫 프로그램
├── tutorials/                        # basics / intermediate / advanced 단계
├── language-reference/               # 문법/타입/내장함수 레퍼런스
├── builtin-functions/                # 내장함수별 상세
└── .vitepress/
    ├── config.*                      # 사이드바/네비/메타
    └── theme/
        ├── index.ts                  # 컴포넌트 등록
        ├── InlinePlayground.vue      # 인라인 코드 실행 (백엔드 API 호출)
        └── ...
```

## 기여 유형

### 1. 오타/문구 수정
- 작은 변경은 GitHub 웹 에디터로도 가능.
- PR 본문에 페이지 경로 명시.

### 2. 새 튜토리얼/페이지 추가
- 적절한 카테고리 디렉터리에 `.md` 추가.
- `docs/.vitepress/config.*`의 사이드바에 항목 추가 (안 하면 검색만 됨).
- 페이지 상단에 `# 제목` 1개 + 짧은 도입부 권장.

### 3. 코드 샘플
- 백엔드 API에서 실행 가능한 단순 예제는 `<InlinePlayground>`로 감싸기.
- 입력(`입력` 호출)이 필요한 예제는 일반 코드 블록 유지 (InlinePlayground 미지원).
- 코드 fence는 ` ```hik ` 사용 (syntax highlight).

### 4. 테마/컴포넌트 변경
- `docs/.vitepress/theme/` 안에서 작업.
- 새 컴포넌트는 `theme/index.ts`에 `app.component(...)` 등록.
- 사용자 입력 렌더링 시 `v-html` 절대 금지 (XSS).

## 빌드 검증

```bash
npm run docs:build        # 전체 빌드 + 사이트맵 생성
npm run docs:preview      # 빌드 결과 로컬 미리보기
```

링크 깨짐 / 누락된 페이지가 있으면 빌드 단계에서 경고가 나옵니다.

## PR 제출

1. 위 검증 통과
2. PR 템플릿(`.github/PULL_REQUEST_TEMPLATE.md`) 따라 작성

## 보안

[`SECURITY.md`](./SECURITY.md) 참조. 특히 InlinePlayground 관련 우회를 발견하면 공개 이슈로 등록하지 말아주세요.
