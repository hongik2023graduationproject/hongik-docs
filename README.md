# hong-ik Documentation Site

[hong-ik](https://github.com/hongik2023graduationproject/hong-ik) 프로그래밍 언어의 공식 문서 사이트입니다.

## 프로젝트 구조

```
hongik-docs/
├── docs/                          # 문서 콘텐츠
│   ├── index.md                   # 랜딩 페이지
│   ├── .vitepress/
│   │   └── config.ts              # VitePress 설정
│   ├── getting-started/           # 시작하기
│   ├── language-reference/        # 언어 레퍼런스
│   ├── builtin-functions/         # 내장 함수
│   ├── tutorials/                 # 튜토리얼
│   └── en/                        # 영어 문서 (향후)
├── .github/workflows/
│   └── deploy.yml                 # GitHub Pages 배포
├── package.json
└── README.md
```

## 로컬 개발

### 필수 요구사항

- Node.js 16.0 이상
- npm 7.0 이상

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 시작 (http://localhost:5173)
npm run docs:dev

# 빌드
npm run docs:build

# 빌드 결과 미리보기
npm run docs:preview
```

## 문서 작성 가이드

### 문서 추가

1. `docs/` 디렉토리에 마크다운 파일 생성
2. `.vitepress/config.ts`의 사이드바에 추가
3. `npm run docs:dev`로 로컬 확인

### 마크다운 작성 예제

```markdown
# 제목

## 소제목

기본 문자 + **굵게** + *기울임*

### 코드 블록

\`\`\`hik
정수 x = 10
출력(x)
\`\`\`

### 리스트

- 항목 1
- 항목 2
- 항목 3

### 표

| 열1 | 열2 |
|-----|-----|
| 데이터 | 데이터 |
```

## 배포

### GitHub Pages 자동 배포

`main` 브랜치에 push하면 GitHub Actions가 자동으로:
1. 문서 빌드
2. GitHub Pages에 배포

### 도메인 설정

1. GitHub Pages 설정에서 커스텀 도메인 추가
2. DNS CNAME 레코드 설정

## 기여

문서 개선에 대한 기여는 환영합니다!

1. 포크 후 브랜치 생성
2. 변경사항 커밋
3. Pull Request 제출

## 라이선스

이 문서는 [MIT License](LICENSE)로 배포됩니다.

## 관련 링크

- [hong-ik GitHub](https://github.com/hongik2023graduationproject/hong-ik)
- [hong-ik 공식 사이트](https://hongik-lang.dev)
