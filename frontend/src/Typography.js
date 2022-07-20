import styled from "styled-components";

export const SectionTitleBar = styled.div`
    content: "";
    width: 56px;
    height: 2px;
    margin-right: 16px;
    background-color: #4c94ff;
`;

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

export const BlockTitle = styled.h3`
    padding: 24px 0 21px 24px;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
`;

export const BlockText = styled.p`
    width: 357px;
    padding: 0 24px 81px 24px;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
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

export const ButtonText = styled.p`
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    color: {buttonTextColor};
`;
