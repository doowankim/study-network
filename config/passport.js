//token이 유효한지 체크
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const userModel = require('../model/user');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken(); //Header에 bearer token 값을 푼다
opts.secretOrKey = process.env.SECRET;

module.exports = passport => {
    passport.use(
        new JwtStrategy(opts, (jwt_payload, done) => {
            userModel
                .findById(jwt_payload.id)
                .then(user => {
                    if(user) {
                        return done(null, user); //user라는 값으로 리턴
                    } else {
                        return done(null, false);
                    }
                })
                .catch(err => res.json(err));
        })

    );
};