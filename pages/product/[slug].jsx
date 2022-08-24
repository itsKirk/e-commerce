import { useRouter } from "next/router";
import Layout from "../../components/Layout";

const ProductSCreen = () => {
    const { query } = useRouter();
    const { slug } = query; 
    return (
        <Layout title={ProductSCreen.name}>

        </Layout>
    );
}

export default ProductSCreen;