import { ACCESS_TOKEN } from "@/constants";
import { requestValidateNickname, useSignUpMutation } from "@/domains/auth/auth.api";
import { LoginResponse, POSITION, PositionType, SignUpRequest, WorkingYearType, WORKING_YEAR } from "@/domains/auth/auth.dto";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

const NICKNAME_STEP = 0;
const POSITION_WORKING_YEAR_STEP = 1;

const SignUpPage = () => {
  const [step, setStep] = useState(NICKNAME_STEP);
  const { state } = useLocation();
  const navigate = useNavigate();
  const { mutateAsync: signUp } = useSignUpMutation();

  const { setValue, getValues, register, watch, formState: { errors }, setError, clearErrors, handleSubmit } = useForm<SignUpRequest>({
    defaultValues: {
      nickname: '',
      oauthType: "KAKAO",
    }
  });

  const nickname = watch('nickname')

  useEffect(() => {
    if (!state) {
      navigate('/login');
      return;
    }
    setValue('oauthId', (state as LoginResponse).oauthId);
  }, []);


  useEffect(() => {
    if (nickname) {
      clearErrors();
    }
  }, [nickname]);

  const handleNextStep = async (e: any) => {
    e.preventDefault();
    // TODO: 추후에 API 고쳐지면 수정
    // try {
    //   const { data: isDuplicate } = await requestValidateNickname(encodeURIComponent(nickname));
    //   if (!isDuplicate) {
    //     setError('nickname', { type: "duplicate", message: '중복됩니다.' })
    //     return;
    //   }
    // } catch {
    //   setError('nickname', { type: "duplicate", message: '중복됩니다.' })
    //   return;
    // }

    if (nickname) {
      setStep(POSITION_WORKING_YEAR_STEP);
      return;
    }

    setError('nickname', { type: "required", message: '입력해주세요.' })
  }

  const handleSignUp = handleSubmit(async (formData) => {
    try {
      const { data } = await signUp(formData);
      if (data.accessToken) {
        localStorage.setItem(ACCESS_TOKEN, data.accessToken);
        navigate('/map')
        return;
      }

      navigate('/login')
    } catch {
      alert('회원가입 도중 에러가 발생했습니다.')
    }
  })

  if (step === NICKNAME_STEP) {
    return (
      <form onSubmit={handleNextStep}>
        <input
          {...register('nickname',
            {
              required: '입력해주세요.',
              min: 2,
              max: 8,
              pattern: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|]+$/,
            }
          )}
        />
        <div>{errors.nickname?.message}</div>
        <button type="submit">next</button>
      </form>
    )
  }

  if (step === POSITION_WORKING_YEAR_STEP) {
    return (
      <form onSubmit={handleSignUp}>
        <select {...register('position', { required: '선택해주세요' })} value={POSITION[getValues('position') ?? '']}>
          <option hidden disabled selected value="">직무 선택</option>
          {Object.keys(POSITION).map((item) => (
            <option value={item} key={item}>
              {POSITION[item as PositionType]}
            </option>
          ))}
        </select>
        <div>{errors.position?.message}</div>
        <select {...register('workingYear', { required: '선택해주세요' })} value={WORKING_YEAR[getValues('workingYear') ?? '']}>
          <option hidden disabled selected value="">경력 선택</option>
          {Object.keys(WORKING_YEAR).map((item) => (
            <option value={item} key={item}>
              {WORKING_YEAR[item as WorkingYearType]}
            </option>
          ))}
        </select>
        <div>{errors.workingYear?.message}</div>
        <button type="submit">가입</button>
      </form>
    )
  }

  return null;
};

export default SignUpPage;
