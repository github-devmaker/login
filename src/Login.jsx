import React from 'react'

function Login() {
    return (
        <>
            <div className='w-full h-full  flex items-center justify-center flex-col'>
                <div className=' flex items-center justify-center flex-col bg-gray-800 px-[5rem] py-[5rem] rounded-lg'>
                <p>ยินดีต้อนรับสู่ DCI แฟรตฟอร์ม</p>
                <div className='flex flex-col gap-2'>
                    <div>
                        <input type="text" className='form-control' placeholder='กรอกชื่อผู้ใช้ของคุณ'/>
                    </div>
                    <div>
                        <input type="password" className='form-control' placeholder='กรอกรหัสผ่านของคุณ' />
                    </div>
                </div>
                <div className='my-3'>
                    <button className='btn btn-primary'>เข้าสู่ระบบ</button>
                </div>
                </div>
            </div>

        </>
    )
}

export default Login