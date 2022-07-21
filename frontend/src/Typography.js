import styled from "styled-components";

export const SectionTitleText = styled.h3`
  font-size: 24px;
  font-weight: 600;
  line-height: 29px;
  color: #4c94ff;
`;

export const NavText = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
`;

export const PartnerBlockTitle = styled.h3`
  margin-left: 30px;
  margin-bottom: 8px;
  text-align: left;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const PartnerBlockText = styled.p`
  margin-left: 30px;
  margin-bottom: 16px;
  text-align: left;
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
    font-size: 14px;
    line-height: 24px;
  }
`;

export const CardTitle = styled.h4`
  margin-bottom: 13px;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardText = styled.p`
  display: -webkit-box;
  margin-bottom: 16px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 14px;
  line-height: 22px;
`;

export const ListCardTitle = styled.h4`
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ListCardText = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin-bottom: 16px;
  overflow: hidden;
  font-size: 14px;
  line-height: 22px;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  color: #272727;
`;

export const Placeholder = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  color: #838688;
`;

export const Button = styled.button`
  display: block;
  width: 206px;
  height: 51px;
  margin: 0 auto;
  border: 1px solid #4c94ff;
  cursor: pointer;
  background: #ffffff;
  @media screen and (min-width: 1440px) {
    width: 296px;
  }
`;

export const ButtonText = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  color: #4c94ff;
`;

export const ProjectCardTitle = styled.h3`
  margin-top: 16px;
  margin-bottom: 8px;
  margin-left: 24px;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  color: #272727;
`;

export const ProjectCardText = styled.p`
  margin-bottom: 24px;
  margin-left: 24px;
  font-size: 14px;
  font-weight: 400;
  line-height: 160%;
  color: #83868b;
  @media screen and (min-width: 1440px) {
    width: 357px;
  }
`;
