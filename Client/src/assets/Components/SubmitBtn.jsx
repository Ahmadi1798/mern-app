import { useNavigation } from 'react-router-dom';
const SubmitBtn = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <button
      disabled={isSubmitting}
      type="submit"
      className="bg-[#2cb1bc] text-sm  text-white py-2 w-full  rounded-md"
    >
      {isSubmitting ? 'Submitting...' : 'Submit'}
    </button>
  );
};
export default SubmitBtn;
