
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { User } from './userdata.interface';
import { UserdataService } from './userdata.service';
@Controller('userdata')
export class UserdataController {
    constructor(private readonly userdataService: UserdataService) {}
    public lastUserId = 0;

    @Post()
    createUser(@Body() user: User) {
        console.log(user);
     
        const { name, email,phone,address } = user;
       // const user = { id: ++this.lastUserId, name, email ,phone,address}
       // this.userdataService.addUser(user);
      
        const userwithid = { id: ++this.lastUserId, name, email ,phone,address}
        this.userdataService.addUser(userwithid);
      //  this.users.push(userwithid);
      //  res.status(201).json(user);
      };
    
// }

  

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() user: User) {
    this.userdataService.updateUser(parseInt(id), user);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    this.userdataService.deleteUser(parseInt(id));
  }

  @Get()
  getAllUsers(): User[] {
    return this.userdataService.getUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string): User {
    return this.userdataService.getUser(parseInt(id));
  }
}
