import WhiteRadiusButton from './whiteRadiusButton';

const RecordStopButton = (props) => {
  return (
    <WhiteRadiusButton {...props}>
      <div
        style={{
          backgroundColor: 'rgb(239, 68, 68)',
          borderRadius: '0.25rem',
          width: '1.5rem',
          height: '1.5rem',
          borderWidth: '0',
          borderStyle: 'solid',
          borderColor: '#e5e7eb',
          alignContent: 'center',
        }}
      ></div>
    </WhiteRadiusButton>
  );
};

export default RecordStopButton;
