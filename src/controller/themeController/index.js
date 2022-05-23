const { themeServices, userServices } = require('../../services');

// Getting User Theme [CONTROLLER]
const getUserThemeController = async(req, res)=> {
    try{
        if(req.params) {
            const user = await userServices.getUserByIdService(req.params?.userId);
            if(user?.exist === true) {
                const theme = await themeServices.getThemeByUserService(user?.data?._id);
                if(theme?.exist === true) {
                    res.status(200).json({
                        success: true, 
                        message: "Theme archived", 
                        data: theme?.data
                    });
                }else {
                    res.status(200).json({
                        success: false, 
                        message: "Theme not available", 
                        data: {}
                    });
                }
            }else {
                res.status(200).json({
                    success: false, 
                    message: "User does not exist", 
                    data: {}
                }); 
            }
        }else {
            res.status(200).json({
                success: false, 
                message: "No user requested", 
                data: {}
            });
        }
    }catch(err) {
        res.status(200).json({
            success: false, 
            message: "Call not acheived", 
            data: {}
        });
    }
}

// Updating User Theme [CONTROLLER]
const updateUserThemeController = async( req, res)=> {
    try{
        if(req?.body) {
            const theme = await themeServices.getThemeByIdService(req?.body?.themeId);
            if(theme?.exist === true) {
                const updatedTheme = await themeServices.updateThemeByIdService(
                    theme?.data?._id,
                    req?.body?.changeData
                );
                if(updatedTheme?.updated === true) {
                    res.status(200).json({
                        success: true, 
                        message: "Theme updated", 
                        data: updatedTheme?.data
                    });
                }else {
                    res.status(200).json({
                        success: false, 
                        message: "Unable to update theme", 
                        data: {}
                    });
                }
            }else {
                res.status(200).json({
                    success: false, 
                    message: "Theme not available to update", 
                    data: {}
                });
            }
        }else {
            res.status(200).json({
                success: false, 
                message: "Request not received", 
                data: {}
            });
        }
    }catch(err) {
        res.status(200).json({
            success: false, 
            message: "Call not acheived", 
            data: {}
        });
    }
}

module.exports = {
    getUserThemeController,
    updateUserThemeController
}