import React, { useEffect } from 'react';
import '../styles/style.css';

const Advantages = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  return (
    <section className="about-section pb-5">
      <div className="container" style={{ paddingTop: '150px' }}>
        <div className="row">
          <div className="col-lg-6">
            <div className="card">
              <img
                src={'https://www.cdc.gov/nutrition/resources-publications/images/Healthy_Eating_Benefits_Adult_April2021_H.jpg'} 
                className="card-img-top"
                alt="About Us"
              />
            </div>
          </div>
          <div className="col-lg-6 text-sec">
            <h2 className='pt-2 text-center'>Benefit of eating healthy food</h2>
            <p>
            Eating healthy food provides numerous benefits for both your physical and mental well-being. Here are some key advantages:
            </p>
            <p>
            <b><span className='colorcate'>1.</span> <span>Nutrient Intake</span></b>:
Healthy foods are rich in essential nutrients such as vitamins, minerals, proteins, and fiber, which are crucial for the proper functioning of the body.
Adequate nutrient intake supports growth, development, and overall maintenance of bodily functions.
            </p>
            <p>
            <b><span className='colorcate'>2.</span> <span>Weight Management</span></b>:
A balanced diet helps in maintaining a healthy weight. Consuming the right proportion of nutrients and controlling calorie intake can prevent obesity and related health issues.
            </p>
            <p>
            <b><span className='colorcate'>3.</span> <span>Disease Prevention</span></b>:
A diet rich in fruits, vegetables, whole grains, and lean proteins can help prevent various chronic diseases such as heart disease, diabetes, and certain types of cancer.
Antioxidants present in many healthy foods also contribute to reducing the risk of cell damage and inflammation.
            </p>
            <p>
            <b><span className='colorcate'>4.</span> <span>Energy Boost</span></b>:
Nutrient-dense foods provide a sustained release of energy, helping you stay alert and focused throughout the day.
Avoiding sugary and processed foods prevents energy crashes and fatigue.
            </p>
            <p>
            <b><span className='colorcate'>5.</span> <span>Improved Digestive Health</span></b>:
High-fiber foods, such as fruits, vegetables, and whole grains, promote better digestion and regular bowel movements.
A healthy diet can help prevent gastrointestinal issues like constipation and irritable bowel syndrome.
            </p>
            <p>
            <b><span className='colorcate'>6.</span> <span>Enhanced Mood and Mental Health</span></b>:
Certain nutrients in healthy foods play a role in the production of neurotransmitters that regulate mood.
Omega-3 fatty acids found in fish, for example, are linked to improved mental well-being.
            </p>
            <p>
            <b><span className='colorcate'>7.</span> <span>Stronger Immune System</span></b>:
Proper nutrition supports a robust immune system, helping the body defend against infections and illnesses.
Nutrients like vitamin C, zinc, and antioxidants contribute to immune function.
            </p>
            <p>
            <b><span className='colorcate'>8.</span> <span>Better Skin, Hair, and Nails</span></b>:
Nutrient-rich foods contribute to healthier skin, shinier hair, and stronger nails.
Adequate hydration and consumption of vitamins and minerals play a role in maintaining a youthful appearance.
            </p>
            <p>
            <b><span className='colorcate'>9.</span> <span>Long-Term Health and Longevity</span></b>:
Consistently making healthy food choices contributes to overall longevity and a higher quality of life.
By reducing the risk of chronic diseases, a nutritious diet promotes a healthier and more active lifestyle as you age.
            </p>
            <p>
            <b><span className='colorcate'>10.</span> <span>Disease Prevention</span></b>:
Certain nutrients, especially omega-3 fatty acids and antioxidants, are associated with cognitive function and may help prevent cognitive decline as you age.
Proper nutrition supports brain health, aiding in memory and concentration.
            </p>
            <p>
            Incorporating a variety of nutrient-dense foods into your diet and maintaining a healthy lifestyle can significantly contribute to your overall well-being and longevity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
