# TAT® Calm for Animals (and You) — 디자인 명세서

---

## 웹사이트 디자인 원칙

### 1. 경험 우선, 설명은 나중에

방문자가 TAT®를 이해하기 전에 먼저 느끼게 합니다.
감정적 연결은 항상 설명보다 먼저입니다.

### 2. 동물 입장, 인간 통과

동물이 진입점입니다. 인간의 치유는 자연스럽게 따라옵니다.
"동물을 도우세요 — 그리고 당신 안에서 무슨 일이 일어나는지 느껴보세요."

### 3. 콘텐츠보다 연결

정보를 나열하지 않습니다. 연결을 만듭니다.
동물 ↔ 보호자, 나 ↔ 커뮤니티, 개인 ↔ 집단.

### 4. 항상 단순하게

내비게이션 최대 5개(최소화). 하위 메뉴 없음.
각 페이지는 하나의 명확한 행동을 유도합니다.

### 5. 신비롭지만 따뜻하게

압도적이지 않은 영적 깊이. 가볍지 않은 따뜻함.
신성한 무게감과 친근한 따뜻함의 균형.

### 6. 설명 말고 보여주기

후기는 이야기로. 기능은 경험으로. 가격은 가치로.
"0년, 0개국" 같은 빈 숫자는 사용하지 않습니다.

### 7. 비개발자 친화적

콘텐츠 관리에 코드가 필요 없어야 합니다.
비디오, 텍스트, 이벤트는 누구나 직관적으로 업데이트할 수 있어야 합니다.

---

## 프로젝트 맥락

이 프로젝트는 TAT®(Tapas Acupressure Technique)의 창시자 Tapas Fleming이 설립한 치유 플랫폼 tatlife.com의 리디자인입니다. 새 전략은 동물을 주된 진입점으로 내세우며, 인간의 치유는 자연스럽게 따라오는 방식입니다. 사이트는 정보 전달이 아닌 경험을 주는 공간이어야 합니다.

---

## 디자인 방향

### 미학

- **톤**: 따뜻하고, 신비롭고, 안정적 — 영적이지만 압도적이지 않음
- **느낌**: 집에 온 것처럼. 안전함. 고대의 지혜가 현대적 고요함과 만남.
- **금지**: 일반적인 웰니스 앱, 크리스탈 치유 느낌, 차가운 미니멀리즘
- **레퍼런스**: Goop과 일본 선 정원의 만남 — 프리미엄하고, 따뜻하고, 살짝 이세계적

### 색상 팔레트

| 토큰              | 값        | 용도                                  |
| ----------------- | --------- | ------------------------------------- |
| `--brand-primary` | `#D4703A` | 버튼, 링크, 강조                      |
| `--brand-light`   | `#ECC4A0` | 배경 틴트, 호버 상태                  |
| `--brand-dark`    | `#B05A28` | 버튼 호버                             |
| `--background`    | `#FAF6F1` | 기본 페이지 배경                      |
| `--dark`          | `#2E1A0C` | Hero / 다크 섹션 배경                 |
| `--gold`          | `#D4A843` | 서브헤딩, 이탤릭 강조, 다크 섹션 라벨 |
| `--gold-light`    | `#EDD08A` | 골드 배경 틴트                        |
| `--muted`         | `#8B6F5E` | 부제목, 캡션 텍스트                   |

> **색상 변경 이력**
>
> - `--brand-primary`: 원본 `#E8833A` → `#D4703A` (더 따뜻하고 안정적인 테라코타)
> - `--dark`: 원본 `#1E1A14` → `#2E1A0C` (깊은 앰버 브라운, 너무 어둡지 않게 조정)
> - `--gold`, `--muted`: 신규 추가
> - 기존 olive 계열 색상 (`#6B7A52` 등) 전면 제거

### 타이포그래피

| 역할 | 폰트                    | 토큰                   |
| ---- | ----------------------- | ---------------------- |
| 헤딩 | Playfair Display        | `--font-serif`         |
| 본문 | DM Sans                 | `--font-sans`          |
| 강조 | Playfair Display Italic | 감성적 문구, 풀 인용구 |

> **폰트 변경 이력**
>
> - 원본 단일 폰트 `Outfit` → `Playfair Display` (헤딩) + `DM Sans` (본문)으로 분리
> - 초기 헤딩 후보였던 `Cormorant Garamond`는 획 대비가 너무 날카로워 `Playfair Display`로 교체

### 모션 및 인터랙션

- 부드럽고, 느리고, 의도적인 애니메이션 — 갑작스러운 움직임 없음
- 스크롤 트리거 등장 (페이드 업, 부드럽게)
- 7가지 믿음: 스크롤 시 하나씩 클릭 인터랙션으로 등장 및 해소
- 다크 섹션에 미세한 grain texture 오버레이
- Hero 배경에 부드러운 방사형 그라디언트 글로우
- 살아있지만 차분한 느낌의 호버 상태

---

## 페이지 구조 (홈페이지)

### 1. 내비게이션

```
비로그인:
[로고: TAT® CALM]  For Animals (and You) · For People · Work with Tapas · Certification · Find a Pro  [Join ▾]

로그인:
[로고: TAT® CALM]  For Animals (and You) · For People · Work with Tapas · Certification · Find a Pro  [My Account ▾]
```

- 스크롤 상단: 투명 + cream 텍스트
- 스크롤 후: 불투명 warm cream 배경 + charcoal 텍스트
- 모바일: 햄버거 메뉴
- Join 드롭다운: Help Yourself ($24/월) / Professional Support ($47/월)
- My Account 드롭다운: 대시보드 / 설정 / 로그아웃
- 별도 Membership 페이지 없음 — 각 페이지 CTA가 직접 구독 흐름으로 연결
- About TAT / FAQ / Research — 푸터 링크만

---

### 2. Hero 섹션 (다크 — 깊은 앰버)

**배경**: 깊은 앰버/브라운 (`#2E1A0C`) + 중앙에서 퍼지는 warm radial glow (오렌지/골드). 미세한 grain texture 오버레이.

**콘텐츠**:

```
작은 라벨 (대문자, 자간):
"TAPAS ACUPRESSURE TECHNIQUE"

헤드라인 (대형 serif, cream):
"Help your animal
feel calm and at ease."

서브헤드라인 (italic serif, muted gold):
"And notice what happens in you."

CTA:
[주요 — 오렌지]  "Start with Your Animal"
[보조 — ghost]   "Watch How It Works"
```

**비주얼**: 우측 — 사람과 반려동물이 함께 있는 따뜻하고 친밀한 사진. 부드러운 자연광. 현재는 Unsplash 플레이스홀더.

---

### 3. 7가지 믿음 섹션 (라이트 — Cream)

**목적**: 감정적 훅. 방문자가 자신을 인식함.

**헤딩 (좌측 정렬, serif)**:

```
"Do any of these feel familiar?"
```

**인터랙션**: 각 믿음은 클릭 가능. 클릭 시:

- 번호 → ✓ 체크로 전환 (brand 색상)
- 텍스트에 취소선 + 투명도 감소
- ripple 효과 발생
- 하단 진행 바가 채워짐 (0/7 → 7/7)
- 7개 모두 클릭 시 전환 메시지 + CTA 등장

**7가지 믿음**:

```
"나는 사랑받을 수 없어."
"나는 원치 않는 존재야."
"나는 항상 경계를 늦출 수 없어."
"아무도 나를 소중히 여기거나 내 말을 듣지 않아."
"나는 항상 피해자야."
"나는 절대 안전할 수 없어."
"나는 좋은 것을 가질 자격이 없어."
```

**전환 문장** (전부 클릭 후 등장):

```
"These beliefs are born from experience.
And they can be dissolved — gently, without reliving anything."
```

**CTA** (하단, 미묘하게):

```
"See how TAT works →"
```

---

### 4. ForAnimals — TAT for Animals (다크 — 깊은 그린)

**목적**: 즉각적인 증명. TAT for Animals 프로그램 소개.

**레이아웃**: 2컬럼 — 좌측 텍스트 + CTA, 우측 YouTube 비디오 플레이어

**헤딩**:

```
"Help your animal feel more joyful, relaxed, and at peace."
```

**서브카피**:

```
"TAT helped Luna reconnect with the world around her
in a way that felt safe and joyful."
```

**비디오**: YouTube `UpbujaNsKKA` — 클릭 전 자동 썸네일, 클릭 시 embed 마운트  
**CTA**: "Learn more about TAT for Animals →" → `/for-animals`  
_실제 TAT for Animals 세션 영상으로 교체 예정 (Jez/Tapas 확인 필요) ⚠️_

---

### 5. ForPeople — Mirror of Calm + Healing ACEs Plus (다크 — 깊은 그린)

**목적**: Mirror of Calm 개념 브릿지 → Healing ACEs Plus 프로그램 소개.

**레이아웃**:  
- 상단: 중앙 정렬 짧은 브릿지 텍스트 (Mirror of Calm)  
- 골드 구분선 (w-16)  
- 하단: 2컬럼 — 좌측 텍스트 + CTA, 우측 YouTube 비디오

**Mirror 브릿지 메시지**:

```
"Your animal reflects what you carry.
When they find peace — so do you."
```

**Healing ACEs Plus 헤딩**:

```
"Your past doesn't have to define your present."
```

**Tapas 인용구** (blockquote):

```
"Healing ACEs Plus helps you gently release the beliefs
formed in childhood — not by reliving them,
but by allowing something new to take their place."
```

**비디오**: YouTube `zLc3k4v-hrU` — 클릭 전 자동 썸네일, 클릭 시 embed 마운트  
**CTA**: "Learn more about Healing ACEs Plus →" → `/for-people`  
_실제 Healing ACEs 영상으로 교체 예정 (Jez/Tapas 확인 필요) ⚠️_

---

### 6. Community 섹션 (라이트 — Surface)

**목적**: 그룹 치유 / 커뮤니티 연결 강조

**헤딩**:

```
"Healing is stronger together."
```

**통계 바** (한 줄):

```
80+ 개국  |  500K+ 도달  |  30+ 년의 수련
```

**3개 필러 카드** (호버 시 위로 뜨며 오렌지 라인 등장):

```
🌿 Weekly Live Sessions
   "Join Tapas and a small group every week"

🌍 Global Community
   "Thousands of people healing together worldwide"

📹 Full Video Library
   "Hundreds of sessions available anytime"
```

---

### 7. Membership 섹션 (다크 — 깊은 앰버)

**목적**: 멤버십 전환

**헤딩 (중앙, cream serif)**:

```
"Choose your path to calm."
```

**2개 카드** (나란히, warm borders):

```
CARD 1 — Help Yourself          CARD 2 — Professional Support
$24 / month                      $47 / month
                                 ★ Most Popular

· Healing ACEs video library    · Everything in Help Yourself
· TAT for Animals videos        · Monthly live webinars
· Self-guided practice          · Animals + People sessions
· Community access              · All past recordings
                                · Direct support from Tapas

[Join Help Yourself]            [Join Professional Support]

Cancel anytime                  Cancel anytime
```

---

### 8. About Tapas 섹션 (라이트 — Cream)

**레이아웃**: 좌측 Tapas 사진 + "1993 Founded" 뱃지, 우측 텍스트

**헤딩**:

```
"Tapas Fleming"
"Creator and Founder of TAT®"
```

**본문**:

```
"After years of searching for a simpler, gentler way
to help people heal — without reliving their pain —
Tapas developed TAT® in 1993.

Today, TAT® has reached hundreds of thousands of people
in over 80 countries. Her mission remains the same:

'Help people find peace. One person —
and one animal — at a time.'"
```

**소셜 아이콘**: Facebook, YouTube, X (호버 시 brand 색상)

---

### 9. Footer (다크)

```
로고 + 태그라인: "Sharing the Celebration of Love"

링크:
For Your Animal · Membership · Work with Tapas
Find a Pro · Certification · Contact

법적 고지:
Privacy Policy · Terms of Service

소셜: Facebook · YouTube · X/Twitter

저작권: © 2026 TATLife®, Inc. All rights reserved.
```

---

## 기술 명세

### 스택

- Next.js 15 (App Router)
- Tailwind CSS v4
- Framer Motion (애니메이션)
- TypeScript

### 구현된 주요 인터랙션

1. **7가지 믿음 클릭 인터랙션**: 클릭 → 취소선 + 진행 바. 7개 완료 시 전환 메시지 등장
2. **Hero glow 효과**: CSS radial gradient 배경 + SVG noise grain texture
3. **Navbar 전환**: 스크롤 전 투명(cream 텍스트) → 스크롤 후 cream 배경(charcoal 텍스트)
4. **Membership 카드**: 호버 시 위로 6px lift + warm shadow
5. **비디오 재생**: 클릭 전 dark 썸네일 + 오렌지 플레이 버튼, 클릭 후 YouTube embed 마운트

### 이미지 플레이스홀더 (Unsplash — 나중에 교체)

- Hero: 사람과 반려동물, 따뜻한 자연광
- For Your Animal: 평화로운 개
- About Tapas: 따뜻한 야외 배경의 여성 (실제 Tapas 사진으로 교체 필요)

### 폰트 (Google Fonts)

```typescript
import { Playfair_Display, DM_Sans } from "next/font/google";

// 헤딩용
const playfair = Playfair_Display({
  variable: "--font-cormorant", // CSS 변수명 유지
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

// 본문용
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
```

> **참고**: CSS 변수명 `--font-cormorant`는 초기 Cormorant Garamond 계획에서 유래. 실제 폰트는 Playfair Display로 변경되었으나 변수명은 하위 호환성을 위해 유지.

---

## 교체 필요 항목 (플레이스홀더)

- [ ] Hero 이미지 → Tapas 실제 사진
- [ ] 비디오 섹션 → 실제 TAT for Animals 비디오 (Jez/Tapas 확인 필요)
- [ ] 후기 → 실제 Kai/Bowie/Misty 이야기
- [ ] 멤버십 가격 → Tapas와 확인 ($24/$47 또는 $24/$59)
- [ ] 멤버십 혜택 → 정확한 포함 내용 확인
- [ ] About 사진 → Tapas 실제 고해상도 사진

---

_최종 업데이트: 2026년 4월 — Phase 2 홈페이지 프로토타입 기준_
