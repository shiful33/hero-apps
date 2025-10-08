import axios from "axios"
import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] =useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        axios('./heroApps.json')
        .then(data => 
            0(data.data))
        .catch(err => setError(err))
        .finally(() => setLoading(false))
    }, [])
  
    return { products, loading, error }
}

export default useProducts;