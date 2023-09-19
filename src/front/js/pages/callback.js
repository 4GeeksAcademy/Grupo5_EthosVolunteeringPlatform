import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const CallBack = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const state = searchParams.get('state')
    const code = searchParams.get('code')
    const scope = searchParams.get('scope')
    

    const getCallback = async () => {
        const token = localStorage.getItem('token')
        try {
            const response = await fetch(`${process.env.BACKEND_URL}/api/callback?state=${state}&code=${code}&scope=${scope}`,
            {headers: { 'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}` }}
            );
            const body = await response.json()
            if(response.ok){
                alert(body.message)
                setTimeout(() => navigate('/perfilOrg'), 3000)
            }else if(response.status == 500){
                alert(body.message)
            }
        } catch (error) {
            console.log(error)
        }
        
    };
    useEffect(()=>{
        getCallback();
    }, [])
    return (
        <div className="container">
            {"Serás redirigido a tu perfil en 3 seconds... :-)"}
        </div>
    )
};

export default CallBack