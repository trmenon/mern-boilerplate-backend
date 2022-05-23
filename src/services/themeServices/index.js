const themeSchema = require('../../model/themeModel');

// Retreiving Theme by Id
const getThemeByIdService = async (id)=> {
    try{
        const theme = await themeSchema.findById(id).populate(['user']);
        if(theme) {
            return {exist: true, data: theme};
        }else {
            return {exist: false, data: {}};
        }
        
    }catch(err) {
        console.log("[THEME-SERVICE-EXCEPTION: Getting Theme by Id");
        console.log(err);
        return {exist: false, data: {}};
    }
};

// Retreiving Theme by User
const getThemeByUserService = async (user)=> {
    try{
        const theme = await themeSchema.findOne({user}).populate(['user']);
        if(theme) {
            return {exist: true, data: theme};
        }else {
            return {exist: false, data: {}};
        }
        
    }catch(err) {
        console.log("[THEME-SERVICE-EXCEPTION: Getting Theme by user");
        console.log(err);
        return {exist: false, data: {}};
    }
};

// Create New Theme [SERVICES]
const createNewTheme = async (theme)=> {
    try {
        const newTheme = new themeSchema(theme);
        await newTheme.save((error, theme) => {
          if (error) {
              console.log("[ERROR] Creating new user theme");
              console.log(error);
          }
          return theme;
        });
        return newTheme;
    }catch (error) {
        console.log("[EXCEPTION] Creating new user theme");
    }
};

// Updating Theme [SERVICES]
const updateThemeByIdService = async (id, data)=> {
    try {
        const updatedTheme = await themeSchema.findByIdAndUpdate(id, data, {new: true,});
        if(updatedTheme) {
            return {updated: true, data: updatedTheme};
        }else {
            return {updated: false, data: {}};
        }
        
    }catch(err) {
        console.log("[THEME-SERVICE-EXCEPTION] Updating theme");        
    }
    
}

module.exports={
    getThemeByIdService,
    getThemeByUserService,
    createNewTheme,
    updateThemeByIdService
};