import CommonEditorialCard from "../../components/common/CommonEditorialCard";
import CommonHeader from "../../components/common/CommonHeader";
import Layout from "../../components/layout/Layout";

const EditorialPage = () => {
  return (
    <Layout>
      <CommonHeader headerTitle="Editorial" headerCategories={[]} />

      <CommonEditorialCard
        title="China dam over Brahmaputra will be a disaster"
        imageUrl="https://images.outlookindia.com/public/uploads/articles/2021/3/11/Dam1-kQ2B--621x414@LiveMint_570_850.jpg"
        content="China is approving a mega dam on the world’s largest and the deepest gorge over the Tsangpo/ Siang/ Brahmaputra. Actually, it is a Giga dam as it is going to produce 60GW of energy. China’s aim to achieve carbon neutrality by 2060 by building a Giga dam for cheap electricity is outrageous. China already has an excess of energy, who will benefit from this electricity done at the expense of billions of people, including the death of the river Siang/Brahmaputra? "
        slug="china-dam-over-brahmaputra-will-be-a-disaster"
      
      />

<CommonEditorialCard
        title="A climate dividend: On India, net zero and energy transition"
        imageUrl="https://www.researchgate.net/profile/Stephen-Andersen/publication/237644793/figure/fig1/AS:298948859318277@1448286371056/Climate-zones-of-India.png"
        content="As it prepares to face pressure at the COP26 of the UN Framework Convention on Climate Change in Glasgow, India is adopting the stand that a national deadline for net zero carbon dioxide emissions is uncalled for, given its moral claim to a far greater share of the remaining global carbon budget. The budget, which represents the estimated volume of future emissions that will allow global average temperature rise to be kept within safe limits — well below 2° C or 1.5° C under the Paris Agreement — must anyway be shared by all countries. Since China, the U.S. and the EU collective, representing the highest emissions, are expected to occupy a big share of the remaining budget calculated at between 420-580 Gigatonnes of CO2, India will again rely on its historical energy poverty, underdevelopment and low per capita emissions to convince the world that a net zero target is incongruous with the present reality. Yet, as the Centre must acknowledge, a minimalist approach is not an option,
        "
        slug="china-dam-over-brahmaputra-will-be-a-disaster"
      
      />
    </Layout>
  );
};

export default EditorialPage;
