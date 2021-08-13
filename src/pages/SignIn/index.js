import React, { useEffect } from "react"
import styled from "styled-components"
import SignInContent from "pages/SignIn/SignInContent"
import { withRouter } from "react-router-dom"
import useSignInPageData from "utils/hooks/signIn/useSignInPageData"
// import { darkPrimaryColor } from "styles/colors"

const PageContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#03030b, #151a44, #335f9e);
`

function SignInPage({ history }) {
  const { initialize, isApiCallSuccess } = useSignInPageData()
  useEffect(() => {
    return () => {
      initialize()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (isApiCallSuccess) {
      history.push("/main")
    }
  }, [isApiCallSuccess, history])

  return (
    <PageContainer>
      <SignInContent />
    </PageContainer>
  )
}

export default withRouter(SignInPage)
