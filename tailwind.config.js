module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Quét toàn bộ file trong thư mục src
  ],
  theme: {
    extend: {
      borderWidth: {
        '1': '1px'
      },
      borderRadius:{
        '10px': '10px'
      },
      fontSize: {
        '32px': '32px'
        
      },
      width: {
        'logo': '180px',
        'sm': '90%',
        'xl': '86%'
        
      },
      padding: {
        '124px': '124px'
      },

    top: {
      'label': '-100%'
    }
    
    },
  },
  plugins: [],
}
