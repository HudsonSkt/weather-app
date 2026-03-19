import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 2rem 2.5rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  width: 420px;
  color: white;
  text-align: center;
`;

export const CityName = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 1px;
`;

export const Temp = styled.div`
  font-size: 5rem;
  font-weight: 700;
  line-height: 1;
`;

export const Description = styled.div`
  font-size: 1rem;
  text-transform: capitalize;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.1);
  padding: 0.3rem 1rem;
  border-radius: 20px;
`;

export const InfoRow = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.25rem;
`;
