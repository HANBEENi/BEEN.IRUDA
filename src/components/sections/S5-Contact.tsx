import { styled } from 'styled-components';
import SectionLayout from '../layout/SectionLayout';
import Utterances from '@/hooks/Utterances';
import { contactData } from '@/data/contactData';
import NoticeBanner from '../layout/NoticeBanner';

const Contact = () => {
  return (
    <SectionLayout>
      {/* 1. 섹션 태그 -------------------- */}
      <Wrap id="section-tag-wrap">
        <SectionTagWrap>
          <span>CONTACT</span>
          <span className="line" />
        </SectionTagWrap>
      </Wrap>

      {/* 2. 컨택 정보 -------------------- */}
      <Wrap id="contact-info-wrap">
        <ContactWrap>
          {contactData.map((i, idx) => (
            <Form key={idx}>
              <p className="title">{i.title}</p>
              <a
                href={i.link}
                target="_blank"
                rel="noopener noreferrer"
                className="content"
              >
                {i.content}
              </a>
            </Form>
          ))}
        </ContactWrap>
      </Wrap>

      {/* 3. 피드백 남기기 ----------------- */}
      <Wrap id="feedback-wrap">
        <NoticeWrap>
          <NoticeBanner
            title="김한빈의 포트폴리오에 방문해주셔서 감사합니다"
            descript=""
          />
        </NoticeWrap>
        <FeedbackWrap>
          <Title>
            <div className="thumbnail" />
            <p>피드백 남기기</p>
          </Title>
          <Utterances />
        </FeedbackWrap>
      </Wrap>
    </SectionLayout>
  );
};
export default Contact;

/* 그리드랩 ------------------------------------------------------- */
const Wrap = styled.div`
  display: flex;
  flex: 1;
  height: 100%;

  &#contact-info-wrap {
    display: flex;
    justify-content: center;
  }
  &#feedback-wrap {
    display: flex;
    justify-content: center;
    position: relative;
  }
`;

/* 섹션태그 ------------------------------------------------------- */
const SectionTagWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  height: 100%;

  .line {
    width: 298px;
    height: 0;
    border: 1px solid ${({ theme }) => theme.color};
  }
`;

/* 컨택정보 ------------------------------------------------------- */
const ContactWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  gap: 25px;
  padding: 50px 40px;

  width: 350px;
  height: 100%;

  background: rgba(0, 0, 0, 0.37);
  border-radius: 20px;

  color: #fff;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .title {
    font-weight: 300;
  }
  .content {
    font-size: 20px;

    &:hover {
    }
  }
`;

/* 피드백 남기기 ------------------------------------------------------- */
const FeedbackWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 100%;

  /* background: ${({ theme }) => theme.background}; */
  background: ${({ theme }) => theme.marquee.color};
  border-radius: 20px;

  overflow: hidden;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  padding-top: 30px;

  width: 100%;
  height: 50%;
  z-index: 2;

  background: ${({ theme }) => theme.marquee.color};
  box-shadow: ${({ theme }) => theme.boxshadow};

  .thumbnail {
    width: 90px;
    aspect-ratio: 104.8/104;

    border-radius: 2px;
    background-image: url('/images/lp-cover-portfolio.png');
    background-size: contain;
  }
`;
const NoticeWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 3;

  width: 95%;
`;
