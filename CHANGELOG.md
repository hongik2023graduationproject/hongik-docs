# Changelog

이 프로젝트의 주요 변경 사항을 기록합니다. [Keep a Changelog](https://keepachangelog.com/ko/1.0.0/) 형식을 따릅니다.

## [Unreleased] - 2026-05-19

### 변경 (Changed)
- 9개 튜토리얼 페이지를 `<RunCode>` (외부 플레이그라운드 리다이렉트)에서 `<InlinePlayground>` (사이트 내 인라인 실행)로 일괄 마이그레이션.
- `InlinePlayground.vue`가 백엔드 API `/api/execute` (응답 스키마 `status/output/error`)를 호출하도록 갱신.

### 보안 (Security)
- nginx 보안 헤더 추가: HSTS (1년, includeSubDomains), X-Content-Type-Options nosniff, X-Frame-Options DENY, Referrer-Policy strict-origin-when-cross-origin, Permissions-Policy (camera/microphone/geolocation off), CSP (`unsafe-inline`은 VitePress 호환 위해 임시 허용 — hash/nonce로 좁힐 예정).

### 추가 (Added)
- LICENSE (MIT), SECURITY.md, CONTRIBUTING.md, PR 템플릿, `.env.example`, Dependabot (npm/actions/docker).

### 운영/인프라 (Ops)
- GitHub Actions `deploy.yml` 개선:
  - `concurrency` 가드로 main에 연속 푸시 시 `:latest` 태그 경합 차단.
  - `build-deploy`가 `build-test`의 빌드 아티팩트를 재사용 (`pnpm install` + `docs:build` 중복 제거, deploy job ~60-90s 단축).
  - `paths:` 필터로 README 등 비-사이트 파일 변경은 워크플로 자체를 건너뛴다.
