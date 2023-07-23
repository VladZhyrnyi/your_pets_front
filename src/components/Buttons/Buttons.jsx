import SpriteIcon from 'components/SpriteIcon/SpriteIcon';

import {
  BtnLmWhite,
  BtnLmBlue,
  BtnLmWhiteSmall,
  BtnLmBlueSmall,
  BtnAddPet,
  BtnFilter,
  BtnLocation,
  WrapperIcon,
} from './Button.styled';

const ButtonWhiteBig = ({ prop }) => {
  return (
    <>
      <BtnLmWhite onClick={prop}>Learn more</BtnLmWhite>
    </>
  );
};

const ButtonBlueBig = ({ prop }) => {
  return (
    <>
      <BtnLmBlue onClick={prop}>
        Learn more
        <SpriteIcon icon="pawprint" />
      </BtnLmBlue>
    </>
  );
};

const ButtonBlueSmall = ({ prop }) => {
  return (
    <>
      <BtnLmBlueSmall onClick={prop}>
        Learn more
        <SpriteIcon icon="pawprint" />
      </BtnLmBlueSmall>
    </>
  );
};

const ButtonWhiteSmall = ({ prop }) => {
  return (
    <>
      <BtnLmWhiteSmall onClick={prop}>
        Learn more
        <SpriteIcon icon="pawprint" />
      </BtnLmWhiteSmall>
    </>
  );
};

const ButtonAddPet = ({ prop }) => {
  return (
    <>
      <BtnAddPet onClick={prop}>
        <SpriteIcon icon="plus" color="#FDF7F2" />
        Add pet
      </BtnAddPet>
    </>
  );
};

const ButtonFilter = ({ prop }) => {
  return (
    <>
      <BtnFilter onClick={prop}>
        Filter
        <SpriteIcon icon="filters" />
      </BtnFilter>
    </>
  );
};

const ButtonLocation = ({ prop, children }) => {
  return (
    <>
      <BtnLocation onClick={prop}>
        <WrapperIcon>
          <SpriteIcon icon="location" />
        </WrapperIcon>
        <span>Lviv</span>
        {children}
      </BtnLocation>
    </>
  );
};

export {
  ButtonWhiteBig,
  ButtonBlueBig,
  ButtonWhiteSmall,
  ButtonBlueSmall,
  ButtonAddPet,
  ButtonFilter,
  ButtonLocation,
};
