import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from '../auth/constant';

@Injectable()
export class RefreshStrategy extends PassportStrategy(Strategy, 'refresh') {
  constructor() {
    super({
      //extract jwt from the reqest.
      //jwt must be not expired, if it is, the request will be denied with 401 Unauthorized
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request) => {
          return request?.cookies?.Refresh;
        },
      ]),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }
  //For the jwt-strategy, Passport first verifies the JWT's signature and decodes the JSON

  //payload is the decoded JWT
  async validate(payload: any) {
    return payload;
    // return { userId: payload.sub, username: payload.username };
  }
}
