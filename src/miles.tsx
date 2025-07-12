import { useEffect, useState } from "react";
import styled from "styled-components";

export const Miles = () => {
  const [acctValue, setAcctValue] = useState(0);

  useEffect(() => {
    const fetchInitialValue = async () => {
      const initialValue = await getValue();
      setAcctValue(initialValue);
    };
    fetchInitialValue();
  }, []);

  const addAmount = (amount: number) => {
    setAcctValue((prev) => parseFloat((prev + amount).toFixed(2)));
  };

  const getValue = async () => {
    let url =
      "https://api.sheety.co/e136c85b342e8e3e4e20e044dd311ad1/milesAccount/sheet1";
    try {
      const response = await fetch(url);
      const json = await response.json();
      setAcctValue(json.sheet1[0].value);
      return json.sheet1[0].value;
    } catch (error) {
      console.error("Error fetching value:", error);
      return 0;
    }
  };

  const setAcct = async () => {
    let url =
      "https://api.sheety.co/e136c85b342e8e3e4e20e044dd311ad1/milesAccount/sheet1/2";
    try {
      await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sheet1: {
            value: acctValue,
          },
        }),
      }).then((res) => {
        console.log("Response status:", res);
      });
      alert("Value submitted successfully!");
    } catch (error) {
      console.error("Error submitting value:", error);
      alert("Failed to submit value.");
    }
  };

  return (
    <Container>
      <CenteredLargeNumber>
        ${acctValue.toFixed(2)}
        <FlexContainer>
          <StyledButton onClick={getValue}>Refresh</StyledButton>
          <StyledButton onClick={setAcct}>Submit</StyledButton>
        </FlexContainer>
      </CenteredLargeNumber>
      <FlexContainer>
        <StyledButton onClick={() => addAmount(0.25)}>Add $0.25</StyledButton>
        <StyledButton onClick={() => addAmount(0.5)}>Add $0.50</StyledButton>
        <StyledButton onClick={() => addAmount(0.75)}>Add $0.75</StyledButton>
        <StyledButton onClick={() => addAmount(1)}>Add $1.00</StyledButton>
      </FlexContainer>
      <BarGraphContainer>
        <BarGraphTitle>Progress Tracker</BarGraphTitle>
        <BarGraphRow>
          <BarGraph>
            <BarFill percentage={(acctValue / 7) * 100} />
            <BarLabel>${acctValue.toFixed(2)} / $7.00</BarLabel>
          </BarGraph>
          <CarContainer>
            <CarIcon>🚗</CarIcon>
            <CarText>1 Car</CarText>
          </CarContainer>
        </BarGraphRow>
      </BarGraphContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 32px 0 0 0;
  box-sizing: border-box;
`;

const CenteredLargeNumber = styled.div`
  font-size: 72px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-top: 20vh;
`;

const StyledButton = styled.button`
  padding: 16px 32px;
  border: none;
  color: #ffffff;
  background-color: #cf1e51;
  border-radius: 4px;
  cursor: pointer;
  font-size: 24px;
  margin-top: 32px;
  &:hover {
    background-color: #a0173f;
  }
`;
const FlexContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 16px;
  width: 100%;
  max-width: 800px;
  @media screen and (max-width: 400px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 600px) {
    max-width: 100%;
    padding: 0 16px;
  }
`;

const BarGraphContainer = styled.div`
  margin-top: 40px;
  width: 100%;
  max-width: 600px;
  padding: 0 16px;
`;

const BarGraphRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

const BarGraphTitle = styled.h3`
  text-align: center;
  color: #333;
  margin-bottom: 16px;
  font-size: 18px;
`;

const BarGraph = styled.div`
  position: relative;
  flex: 1;
  height: 40px;
  background-color: #e0e0e0;
  border-radius: 20px;
  overflow: hidden;
  border: 2px solid #ccc;
`;

const BarFill = styled.div<{ percentage: number }>`
  height: 100%;
  width: ${(props) => Math.min(props.percentage, 100)}%;
  background: linear-gradient(90deg, #4caf50, #66bb6a);
  border-radius: 18px;
  transition: width 0.3s ease-in-out;
`;

const BarLabel = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #333;
  font-weight: bold;
  font-size: 14px;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.8);
`;

const CarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 60px;
`;

const CarIcon = styled.div`
  font-size: 24px;
  margin-bottom: 4px;
`;

const CarText = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;
