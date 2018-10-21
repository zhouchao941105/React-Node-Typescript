
import axios from 'axios'
//可采用state字段非0都当做异常来处理，可在interceptor上进行异常处理
axios.interceptors.response.use(res => {
    return res.data
})
export default axios