###### tags: `Side-Project`
# Star Light Project
## 용어 정의
### 사용자
- 일반 사용자
  - 관리자에 의해 회원가입이 승인되어 제한된 서비스를 이용할 수 있는 사용자
  - 접근 가능 메뉴
    - 이벤트 캘린더
    - 나만 아는 갓띵곡
    - 우리아이를 소개합니다
- 관리자
  - 서비스의 운영을 담당하는 사용자

## 기능 정의
- 로그인 (1차 개발)
- 회원가입 (1차 개발)
- 비밀번호 설정 (2차 개발)
- 비밀번호 재설정 (2차 개발)
- 이벤트 캘린더 (1차 개발)
- 사용자 관리 (관리자 전용 기능) (2차 개발)
- 나만 아는 갓띵곡 (3차 개발)
- 우리아이를 소개합니다 (3차 개발)

## 사용자 요구사항
### Auth
#### Auth-01. 회원가입
- 사용자는 로그인 화면 하단의 `회원가입` 버튼을 클릭하여 회원가입 화면으로 이동할 수 있다. 
- 사용자는 회원가입 화면에서 아래와 같은 정보를 `필수`로 입력해야 한다.
  - 이메일 (아이디로 사용)
    - 이메일 포맷이 올바르지 않은 경우 `이메일 포맷이 올바르지 않습니다.` 라는 메시지가 입력창 아래에 표시된다.
  - 닉네임
  - 가입 질문 답변
    - 관리자가 등록한 문제에 대한 답을 입력해야 한다.
    - 관리자가 해당 답변을 확인 후 가입 승인 여부를 결정한다.
- 필수 정보를 모두 입력하면 `완료` 버튼이 활성화된다. `완료` 버튼을 눌러 회원가입 요청을 보낼 수 있다.
  - 요청이 성공한 경우
    - 성공 메시지를 표시한다.
  - 요청이 실패한 경우
    - 실패 메시지를 표시한다.
  - 이메일이 중복된 경우
    - `중복된 이메일입니다.` 라는 메시지를 표시한다.
  - 닉네임이 중복된 경우
    - `중복된 닉네임입니다.` 라는 메시지를 표시한다.
- 관리자가 해당 사용자를 승인을 했을 시, 사용자는 이메일로 비밀번호를 설정하는 링크를 받을 수 있다.
  - 해당 링크에서 비밀번호를 설정한 후, 사용자는 서비스에서 로그인을 할 수 있다.

#### Auth-02. 로그인
- 다음과 같은 경우 사용자는 로그인 화면으로 이동한다.
  - 로그인 이력(또는 캐쉬)이 없는 사용자
  - 로그인 후 일정 기간이 지난 사용자
- 로그인되지 않는 사용자는 로그인/회원가입 이외의 페이지로 이동할 수 없다.
- 사용자는 로그인 화면에서 아래와 같은 정보를 `필수`로 입력해야 한다.
  - 이메일 (아이디)
    - 이메일 포맷이 올바르지 않은 경우 `이메일 포맷이 올바르지 않습니다.` 라는 메시지가 입력창 아래에 표시된다.
  - 비밀번호
    - 비밀번호 포맷이 올바르지 않은 경우 `비밀번호 포맷이 올바르지 않습니다` 라는 메시지가 입력창 아래에 표시된다.
- 필수 정보를 모두 올바르게 입력하면 `로그인` 버튼이 활성화된다. `로그인` 버튼을 눌러 로그인 요청을 보낼 수 있다.
  - 요청이 성공한 경우
    - 성공 메시지를 표시한다.
  - 요청이 실패한 경우
    - 실패 메시지를 표시한다.

#### Auth-03. 비밀번호 설정 
- 사용자는 `비밀번호 설정 링크`를 통해 비밀번호 설정 페이지에 접근할 수 있다.
- 사용자는 비밀번호 설정 화면에서 아래와 같은 정보를 `필수`로 입력해야 한다.
  - 비밀번호
    - 비밀번호는 8자리 이상, 특수문자를 하나 이상 포함해야 한다.
    - 조건에 맞지 않는 비밀번호를 입력한 경우 `8자리 이상, 특수문자를 하나 이상 포함한 비밀번호를 입력해주세요.` 라는 메시지가 입력창 아래에 표시된다.
  - 비밀번호 재확인
    - 위에서 입력한 비밀번호와 같지 않는 경우 `비밀번호가 맞지 않습니다` 라는 메시지가 입력창 아래에 표시된다.
- 필수 정보를 모두 올바르게 입력한 경우 `확인` 버튼이 활성화된다. `확인` 버튼을 눌러 비밀번호 설정 요청을 보낼 수 있다.
  - 요청이 성공한 경우
    - 성공 메시지를 표시한다.
  - 요청이 실패한 경우
    - 실패 메시지를 표시한다.

#### Auth-04. 비밀번호 재설정
- 사용자는 로그인 화면 하단의 `비밀번호를 잊어버리셨나요?` 텍스트 버튼을 클릭하여 비밀번호 재설정 화면으로 이동할 수 있다.
- 사용자는 비밀번호 재설정 화면에서 아래와 같은 정보를 `필수`로 입력해야 한다.
  - 이메일
    - 이메일 포맷이 올바르지 않은 경우 `이메일 포맷이 올바르지 않습니다.` 라는 메시지가 입력창 아래에 표시된다.
- 필수 정보를 모두 올바르게 입력한 경우 `확인` 버튼이 활성화된다. `확인` 버튼을 눌러 비밀번호 재설정 요청을 보낼 수 있다.
  - 요청이 성공한 경우
    - 성공 메시지를 표시한다.
  - 요청이 실패한 경우
    - 실패 메시지를 표시한다.
  - 존재하지 않는 사용자의 이메일을 입력한 경우
    - `존재하지 않는 사용자 이메일입니다.` 라는 메시지를 표시한다.
- 비밀번호 재설정 요청이 완료되면, 사용자가 입력한 이메일로 `비밀번호 설정 링크`를 받을 수 있다.

### Event
#### Event-01. 이벤트 목록 조회
  - 메인 화면 (캘린더)
    - 등록된 이벤트 제목 확인
    - 멤버는 기념일 등록 / 수정 / 삭제 가능 
    - 상단에 이벤트 전광판 넣자 (ex - 버스 광고, 지하철 광고)
      - 이벤트 전광판 넣는데 포인트 필요함 (나중에)
      - 전광판은 하루 단위로 표시
      - 전광판 신청할 수 있는 메뉴 따로 만들기

#### Event-02. 이벤트 상세 조회

#### Event-03. 이벤트 등록

#### Event-04. 이벤트 수정

#### Event-05. 이벤트 삭제

#### Event-06. 이벤트 배너 조회

### UserManagement
> TODO: 사용자 요구사항 정의

### 나만 아는 갓띵곡
> TODO: 사용자 요구사항 정의

### 우리아이를 소개합니다
> TODO: 사용자 요구사항 정의

### Menu
- 사용자는 메뉴바에서 아래와 같은 메뉴를 볼 수 있다.
  - 이벤트 캘린더
  - 나만 아는 갓띵곡
  - 우리아이를 소개합니다
  - 사용자 관리
    - 관리자에게만 보인다.

## Tech Stack
### Web front-end
- React.js
  - CRA webpack project
- React-query
  - api 요청 처리에 사용
- Mobx (state management tool)
  - component 단위 스토어 사용
- Styled-component
  - CSS-in-js 패키지
  - TODO: Sass와 함께 사용하는게 좋을지?
- TODO: Unit test
  - Jest
  - 로직 테스트
    - Mobx 스토어 단위의 로직 테스트 구현 목표
- TODO: Automation UI Testing
  - Cypress.io or Puppeteer

### Back-end server
- TODO
  - Node.js koa.js
  - Firebase

### Deployment
- TODO
  - Vercel
  - Github pages

## Project Structure
> TODO: 폴더 별 용도 설명
- star_light
  - .storybook/
  - public/
    - index.html
  - src/
    - pages/
    - constants/
    - components/
    - styles/
    - utils/
    - assets/
    - stores/
      - index.js
        - store 인스턴스를 담은 객체 리턴
    - index.js
    - App.js
    - RouteContainer.js
      - Global style 정의
      - fullSize props 값에 따라 Navigation bar를 같이 렌더링 할지 여부 결정
      - 페이지 상단 Progress bar 렌더링
      - 로그인 token이 있는지 여부에 따라 
    - RoutePages.js
      - 페이지 라우팅 정의
  - stories/
  - README.md
  
### 기타 설정 파일
> TODO: 설정 파일 별로 왜 필요한지 설명 필요
  - package.json
  - .gitignore
  - jsconfig.json
    - src 절대 경로 설정
    - Mobx decorator lint error disable 설정
  - .eslintignore
    - node modules ignore
  - .eslintrc.json
    - 기본 설정
  - .prettierrc
    - 기본 설정
  - .barbelrc
    - 현재 내용 없음
  - config-overrides.js
    - webpack alias 설정
    - Mobx decorator 설정
 