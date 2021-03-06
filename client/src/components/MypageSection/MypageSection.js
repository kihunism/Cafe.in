import React, { useState } from "react";
import { Container, Button } from "../../assets/styles/GlobalStyle";
// import imgurl from "../../assets/images/profile.png";
import { IconContext } from "react-icons/lib";
import ModalContainer from "../ModalContainer/ModalContainer";

import * as Styled from "./MypageSection.styled";
import { useSelector, useDispatch } from "react-redux";
import { clickModalType, showModal, loginUserInfo } from "../../store/actions";

const MypageSection = ({ mypageObjOne }) => {
  // Redux
  const isLogin = useSelector((state) => state.isLogin.isLogin);
  const modalType = useSelector((state) => state.modalType.clickedModalType);
  const userInfo = useSelector((state) => state.userInfo.userInfo);
  const isShowModal = useSelector((state) => state.showModal.isShowModal);
  const dispatch = useDispatch();

  const openPwdChange = () => {
    dispatch(clickModalType("pwdchange"));
    dispatch(showModal(true));
  };
  const openDelAccount = () => {
    dispatch(clickModalType("delaccount"));
    dispatch(showModal(!isShowModal));
  };

  return (
    <>
      {isLogin && (
        <IconContext.Provider value={{ color: "#472d0c" }}>
          <Styled.MypageSec lightBg={mypageObjOne.lightBg}>
            <Container>
              <Styled.Header className="header">
                {" "}
                Welcome Cafe In {userInfo.user_email} !
              </Styled.Header>
              <Styled.MypageRow imgStart={mypageObjOne.imgStart}>
                <Styled.MypageColumn>
                  <Styled.ImgWrapper start={mypageObjOne.start}>
                    {<Styled.Img src={mypageObjOne.img} />}
                  </Styled.ImgWrapper>
                </Styled.MypageColumn>
                <Styled.MypageColumn>
                  <Styled.TextWrapper>
                    <Styled.Id lightTopLine={mypageObjOne.lightTopLine}>
                      <Styled.NameIcon />
                      email : {userInfo.user_email}
                    </Styled.Id>
                    <Styled.Nickname lightTextDesc={mypageObjOne.lightTextDesc}>
                      <Styled.NameIcon />
                      Nickname : {userInfo.nickname}
                    </Styled.Nickname>
                    <Button primary onClick={openPwdChange}>
                      {mypageObjOne.buttonLabel1}
                    </Button>
                    <Button primary> ???????????????</Button>
                  </Styled.TextWrapper>
                </Styled.MypageColumn>
              </Styled.MypageRow>
              <Styled.MypageSec2>
                <Button onClick={openDelAccount}>
                  {mypageObjOne.buttonLabel3}
                </Button>
              </Styled.MypageSec2>
            </Container>
          </Styled.MypageSec>

          <ModalContainer />
        </IconContext.Provider>
      )}
    </>
  );
};

export default MypageSection;
