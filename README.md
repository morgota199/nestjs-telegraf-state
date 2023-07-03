# Nestjs telegraf state
The "Nestjs-telegraf-state" library is an extension for the NestJS framework and the Telegraf bot framework, designed to manage states inside scenes and process scripts in Telegram bots.

## Key features
* **State mechanism inside scenes**: The library provides a mechanism for managing states inside Telegram bot scenes. With Nestjs-telegraf-state you can define different states within each scene and store the data associated with each state.

* **Scene Utilities**: The library provides convenient utilities for working with scenes in Telegram bots. You can define scenes, switch between them, perform certain actions when entering and exiting a scene.

* **Integration with NestJS and Telegraf**: The library allows you to easily integrate the state engine and scene utilities into your applications developed using the NestJS framework and the Telegraf bot framework.

## Install
```console
$ npm install nestjs-telegraf-state
```

## Usage
1. Create a entity of your state.
```ts
import { StateEntity } from 'nestjs-telegraf-state'

export interface InitState {
    title: string
}

interface State extends InitState {
    description?: string 
}

@StateEntity()
export class MyStateEntity {
    constructor(private state: State) {}
    
    get title(): string {
        return this.state.title
    }
    
    get description(): string | undefined {
        return this.state.description
    }
}
```

2. Usage state entity in scene
```ts
import { Scene, InFn, BaseScene, UpdateSceneContextType } from 'nestjs-telegraf-state'
import { Ctx, SceneEnter } from 'nestjs-telegraf'

@Scene()
export class MyScene implements BaseScene {
    static in: InFn<InitState>
    
    @SceneEnter()
    enter(
        @Ctx() context: UpdateSceneContextType, 
        @State(MyStateEntity) entity: MyStateEntity
    ) {
        context.reply(entity.title)
    }
}
```
