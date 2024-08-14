const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://aditya100401.github.io/',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Aditya Sampath',
  description:
    'I am a graduate student at UNC Charlotte pursuing my Masters in Computer Science. I am passionate about AI and Softwares. I have worked on projects involving Machine Learning, Deep Learning, NLP and Software Development. I am currently looking for summer internship opportunities in Software Development and Data Science',
  resume: 'https://shorturl.at/tecPl',
  social: {
    linkedin: 'https://www.linkedin.com/in/aditya-sampath10/',
    github: 'https://github.com/Aditya100401',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Fake News Detection in Hindi and English',
    description:
      'A fake news detection software that can detect fake news in Hindi and English. This is an end to end pipeline which includes preprocessing, generating word embeddings, training a convolutional neural network and deploying the model as a web app using the EEL library. The model is trained on a dataset of 10,000 news articles in Hindi and English. The model achieves an accuracy of 93% for English and 98% for Hindi on the test set.',
    stack: ['Python', 'Tensorflow', 'Keras', 'EEL', 'JavaScript', 'MuRIL', 'IndicBERT', 'Scikit-learn', 'Pandas', 'Numpy', 'Matplotlib','NLTK'],
    sourceCode: 'https://github.com/Aditya100401/Fake-News-Detection'
  },
  {
    name: 'Using Symbolic Regression for Classification of Emotions from EEG Signals',
    description:
      'Using symbolic Regression for classifying emotions from EEG signals. The project involves extracting data from various frequency bands from EEG signals which are passed as features to the SR model to generate equations which help in indentifying the dominant frquencies and the kind of emotions that are being experienced by the subject.',
    stack: ['Python', 'PySR', 'GPLearn', 'Scikit-learn', 'Pandas', 'Numpy', 'Matplotlib', 'DWT', 'Signal Processing'],
    sourceCode: 'https://github.com/Aditya100401/Symbolic-Regression'
  },
  {
    name: '',
    description:
      'Exploring the efficacy of symbolic regression for classification and regression tasks using SR libraries such as PySR and GPLearn. The project involves using symbolic regression to generate mathematical expressions that can be used to classify and predict the values of a dataset. The project also involves comparing the performance of symbolic regression with other machine learning algorithms such as Random Forest, SVM and Logistic Regression.',
    stack: ['Python', 'PySR', 'GPLearn', 'Scikit-learn', 'Pandas', 'Numpy', 'Matplotlib'],
    sourceCode: 'https://github.com/Aditya100401/Symbolic-Regression'
  },
]

const skills = {
  languages: [
      { name: 'JavaScript', icon: `${process.env.PUBLIC_URL}/images/Languages/JavaScript.png`}, 
      { name: 'Python', icon: `${process.env.PUBLIC_URL}/images/Languages/Python.png`},
      { name: 'C', icon: `${process.env.PUBLIC_URL}/images/Languages/C.png`},
      { name: 'C++', icon: `${process.env.PUBLIC_URL}/images/Languages/CPlusPlus.png`},
  ],
  ML_Data: [
    {name: 'Tensorflow', icon: `${process.env.PUBLIC_URL}/images/ML_Data/TensorFlow.png`},
    {name: 'PyTorch', icon: `${process.env.PUBLIC_URL}/images/ML_Data/PyTorch.png`},
    {name: 'Pandas', icon: `${process.env.PUBLIC_URL}/images/ML_Data/Pandas.png`},
    {name: 'D3.js', icon: `${process.env.PUBLIC_URL}/images/ML_Data/D3.js.png`},
    {name: 'MySQL', icon: `${process.env.PUBLIC_URL}/images/ML_Data/MySQL.png`},
  ],
  Web: [
    {name: 'React', icon: `${process.env.PUBLIC_URL}/images/Web/React.png`},
    {name: 'Node.js', icon: `${process.env.PUBLIC_URL}/images/Web/Node.js.png`},
    {name: 'HTML', icon: `${process.env.PUBLIC_URL}/images/Web/HTML5.png`},
    {name: 'CSS', icon: `${process.env.PUBLIC_URL}/images/Web/CSS3.png`},
  ],
  Tools: [
    {name: 'Git', icon: `${process.env.PUBLIC_URL}/images/Other/Git.png`},
    {name: 'Docker', icon: `${process.env.PUBLIC_URL}/images/Other/Docker.png`},
    {name: 'Jupyter', icon: `${process.env.PUBLIC_URL}/images/Other/Jupyter.png`},
    {name: 'Linux', icon: `${process.env.PUBLIC_URL}/images/Other/Linux.png`},
    {name: 'Anaconda', icon: `${process.env.PUBLIC_URL}/images/Other/Anaconda.png`},
    {name: 'Fast API', icon: `${process.env.PUBLIC_URL}/images/Other/FastAPI.png`},
  ],
};


const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'adityasampath01@gmail.com',
}

export { header, about, projects, skills, contact}
