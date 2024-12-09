<template>
    <div class="table" v-if="loader && data.general_parameters.active_parametrs.size_perimetr > 1">
        <h2 class="table__Btitle">Состав комплекта</h2>
        <div class="table__head">
            <div class="table__item light-blue table__head--title">
                <i class="table__hIcon bi bi-list-check"></i>
                Номенклатура</div>
            <div class="table__item dark-blue">
                <i class="table__hIcon bi bi-database"></i>
                Цена, руб (шт.)</div>
            <div class="table__item light-blue">
                <i class="table__hIcon bi bi-calculator"></i>
                Кол-во (шт.)</div>
            <div class="table__item dark-blue">
                <i class="table__hIcon bi bi-wallet"></i>
                Cумма, руб.</div>
        </div>
        
        <div class="table__content" id="table_price">

            <!-- размер панели -->
            <!-- размер панели 2D-->
            <div v-if="data.size_panel.active_parametrs.type_fance_index == 1">
                 
                <div class="table__row" v-if="Fance_tach.cost != 0">
                    <div class="table__item table__title">
                        {{ Price.type_fance.variant_2D.getData('title', data.size_panel.active_parametrs.height_fance, data.size_panel.type_fance[1].params.selected_data.diameter_index) }}
                        {{ data.size_panel.type_fance[2].params.size_verticle.values[data.size_panel.type_fance[2].params.selected_data.size_verticle] }}
                        x {{ data.size_panel.height.values[data.size_panel.active_parametrs.height_fance] }}
                        x {{ Price.panel.width_mm }}
                        
                    </div>
                    <div class="table__item table__value">
                        {{ Price.type_fance.variant_2D.getData('cost', data.size_panel.active_parametrs.height_fance, data.size_panel.type_fance[1].params.selected_data.diameter_index).toLocaleString() }}
                         Руб</div>
                    <div class="table__item table__value">{{ Price.panel.count.toLocaleString() }}</div>
                    <div class="table__item table__weight">
                        <span>
                            {{ Math.round((Price.panel.count  * Price.type_fance.variant_2D.getData('cost', data.size_panel.active_parametrs.height_fance, data.size_panel.type_fance[1].params.selected_data.diameter_index))) }}
                        </span>
                         Кг
                    </div> 
                    <div class="table__item table__value table__price">
                        <span>
                            {{ Math.round(Price.panel.count * Price.type_fance.variant_2D.getData('cost', data.size_panel.active_parametrs.height_fance, data.size_panel.type_fance[1].params.selected_data.diameter_index)).toLocaleString() }} 
                        </span> 
                        Руб</div>
                </div>
            </div> 
            <!-- размер панели 2D-->

            <!-- размер панели 3D -->
            <div v-if="data.size_panel.active_parametrs.type_fance_index == 0">
                      
                <div class="table__row" v-if="Fance_tach.cost != 0">
                    <div class="table__item table__title">
                        {{ Price.type_fance.variant_3D.getData('title', data.size_panel.active_parametrs.height_fance, data.size_panel.type_fance[0].params.selected_data.diameter_index) }}
                        {{ data.size_panel.type_fance[2].params.size_verticle.values[data.size_panel.type_fance[2].params.selected_data.size_verticle] }}
                        x {{ data.size_panel.height.values[data.size_panel.active_parametrs.height_fance] }}
                        x {{ Price.panel.width_mm }}
                        
                    </div>
                    
                    <div class="table__item table__value">
                        {{ Price.type_fance.variant_3D.getData('cost', data.size_panel.active_parametrs.height_fance, data.size_panel.type_fance[0].params.selected_data.diameter_index).toLocaleString() }}
                         Руб</div>
                    <div class="table__item table__value">{{ Price.panel.count.toLocaleString() }}</div>
                    <div class="table__item table__weight">
                        <span>
                            {{ Math.round((Price.panel.count * Price.type_fance.variant_3D.getData('cost', data.size_panel.active_parametrs.height_fance, data.size_panel.type_fance[0].params.selected_data.diameter_index))) }}
                        </span>
                        Кг
                    </div> 
                    <div class="table__item table__value table__price">
                        <span>
                            {{ Math.round(Price.panel.count * Price.type_fance.variant_3D.getData('cost', data.size_panel.active_parametrs.height_fance, data.size_panel.type_fance[0].params.selected_data.diameter_index)).toLocaleString() }} 
                        </span> 
                        Руб</div>
                </div>
            </div>
            <!-- размер панели 3D -->
            
           
            <!-- размер панели TECH -->
            <div v-if="data.size_panel.active_parametrs.type_fance_index == 2">
        
               <div class="table__row" v-if="Fance_tach.cost != 0">
                    <div class="table__item table__title">
                        {{ 
                             Price.type_fance.tech.getData( 'title',
                                this.data.size_panel.active_parametrs.height_fance, // высота
                                this.data.size_panel.type_fance[2].params.selected_data.fance_variant,//true c выпуском, false безопастная
                                this.data.size_panel.type_fance[2].params.selected_data.size_verticle,//Расстояние вертикальными рейками
                            )    
                        }}
                        {{ data.size_panel.type_fance[2].params.size_verticle.values[data.size_panel.type_fance[2].params.selected_data.size_verticle] }}
                        x {{ data.size_panel.height.values[data.size_panel.active_parametrs.height_fance] }}
                        x {{ Price.panel.width_mm }}
                        
                    </div>
                    <div class="table__item table__value">
                        {{ 
                            Price.type_fance.tech.getData( 'cost',
                                this.data.size_panel.active_parametrs.height_fance, // высота
                                this.data.size_panel.type_fance[2].params.selected_data.fance_variant,//true c выпуском, false безопастная
                                this.data.size_panel.type_fance[2].params.selected_data.size_verticle,//Расстояние вертикальными рейками
                            ).toLocaleString() 
                        }} 
                        Руб</div>
                    <div class="table__item table__value">{{ (Price.panel.count).toLocaleString() }}</div>
                    <div class="table__item table__weight">
                       
                        <span>
                            {{ 
                                Math.round((Price.panel.count *
                                Price.type_fance.tech.getData( 'weight',
                                    this.data.size_panel.active_parametrs.height_fance, // высота
                                    this.data.size_panel.type_fance[2].params.selected_data.fance_variant,
                                    this.data.size_panel.type_fance[2].params.selected_data.size_verticle,
                                )))
                           }}
                        </span>
                        Кг
                    </div>
                    <div class="table__item table__value table__price">
                        <span>
                            {{  
                                Math.round(Price.panel.count * 
                                    Price.type_fance.tech.getData( 'cost',
                                        this.data.size_panel.active_parametrs.height_fance, // высота
                                        this.data.size_panel.type_fance[2].params.selected_data.fance_variant,
                                        this.data.size_panel.type_fance[2].params.selected_data.size_verticle,
                                    )
                                ).toLocaleString() 
                            }}
                        </span> 
                        Руб
                    </div>
                </div> 
            </div>
            <!-- размер TECH -->

            <!-- размер панели -->


            <!-- столб начало -->

            <div class="table__row">
                <div class="table__item table__title">
                    {{ 
                        Price.post.getData( 'title',
                            this.data.version_pillar.active_parametrs.height_post,
                            this.data.version_pillar.active_parametrs.sechenie_pillar,
                            this.data.version_pillar.active_parametrs.weight_wall,
                        )
                    }}
                    {{ data.version_pillar.sechenie_pillar.values[data.version_pillar.active_parametrs.sechenie_pillar ]}}
                    {{ data.version_pillar.height.values[data.version_pillar.active_parametrs.height_post]}}
                    x{{ data.version_pillar.weight_wall.values[data.version_pillar.active_parametrs.sechenie_pillar][data.version_pillar.active_parametrs.weight_wall] }}
                </div>
                <div class="table__item table__value">
                    {{ 
                        Math.round(
                            Price.post.getData( 'cost',
                                this.data.version_pillar.active_parametrs.height_post,
                                this.data.version_pillar.active_parametrs.sechenie_pillar,
                                this.data.version_pillar.active_parametrs.weight_wall,
                            )
                        ).toLocaleString() 
                    }} Руб
                </div>
                <div class="table__item table__value">
                    {{ Price.panel.count + 1 }}
                </div>
                <div class="table__item table__weight">
                    <span>
                        {{ (Price.panel.count + 1) * (
                            Math.round( Price.post.getData( 'weight',
                                this.data.version_pillar.active_parametrs.height_post,
                                this.data.version_pillar.active_parametrs.sechenie_pillar,
                                this.data.version_pillar.active_parametrs.weight_wall,
                            )) ) }}
                    </span> Кг
                </div>
                <div class="table__item table__value table__price">
                    
                    <span>
                        {{ Math.round(((Price.panel.count + 1) * 
                            Math.round( Price.post.getData( 'cost',
                                this.data.version_pillar.active_parametrs.height_post,
                                this.data.version_pillar.active_parametrs.sechenie_pillar,
                                this.data.version_pillar.active_parametrs.weight_wall,
                            ))
                        )).toLocaleString() }}
                    </span> Руб
                </div>
            </div> 
        
    
            <div class="table__row" v-if="data.version_pillar.active_parametrs.post_cover">
                <div class="table__item table__title">
                    {{ Price.post.plastic_plug[data.version_pillar.active_parametrs.sechenie_pillar].title }} 
                    {{ data.version_pillar.sechenie_pillar.values[data.version_pillar.active_parametrs.sechenie_pillar]}}
                </div>
                
                <div class="table__item table__value">{{ Price.post.plastic_plug[data.version_pillar.active_parametrs.sechenie_pillar].cost.toLocaleString() }} Руб</div>
                <div class="table__item table__value">{{ (Price.panel.count  + 1).toLocaleString() }}</div>
                <div class="table__item table__value table__price">
                    <span>
                        {{ Math.round((Price.panel.count + 1) * Price.post.plastic_plug[data.version_pillar.active_parametrs.sechenie_pillar].cost).toLocaleString() }}
                    </span>
                    Руб</div> 
            </div> 


            <!-- столб конец -->

            <!-- скобы начало -->
            <div :key="data.version_pillar">
                {{ getScoba() }}
                <div class="table__row" v-if="Scoba.cost != 0">
                    <div class="table__item table__title">{{ Scoba.fortifications_item.title }} </div>
                    <div class="table__item table__value">{{ Scoba.fortifications_item.cost.toLocaleString() }} Руб</div>
                    <div class="table__item table__value">{{ ((Price.panel.count * 2) + 1).toLocaleString() }}</div>
                    <div class="table__item table__value table__price">
                        <span>{{ Math.round(((Price.panel.count * 2) + 1) * Scoba.fortifications_item.cost).toLocaleString() }} </span>
                        Руб</div>
                </div> 
            </div>    
            <!-- скобы конец -->
         
            <div v-if="data.Additional_elements_fence.active_parametrs.type_filling.width != 0">
                <div class="table__row" v-if="data.Additional_elements_fence.active_parametrs.type_filling.type == 'СББ'">
                    <div class="table__item table__title">{{ Price.SBB.SBB_attachment_kit.title }}</div>
                    <div class="table__item table__value">{{ Price.SBB.SBB_attachment_kit.cost.toLocaleString() }} Руб</div>
                    <div class="table__item table__value">{{ (data.Additional_elements_fence.active_parametrs.type_filling.width).toLocaleString() }}</div>
                  
                    <div class="table__item table__weight">
                        <span>
                            {{ Math.round((data.Additional_elements_fence.active_parametrs.type_filling.width * (Price.SBB.weight))) }}
                        </span> Кг
                    </div>

                    <div class="table__item table__value table__price">
                        <span>{{ Math.round((data.Additional_elements_fence.active_parametrs.type_filling.width) * Price.SBB.SBB_attachment_kit.cost).toLocaleString() }}</span>
                        Руб</div>
                </div>
                
                <div class="table__row" v-if="data.Additional_elements_fence.active_parametrs.type_filling.type == 'ПББ'">
                    <div class="table__item table__title">{{ Price.PBB.title }}</div>
                    <div class="table__item table__value">{{ Price.PBB.cost.toLocaleString() }} Руб</div>
                    <div class="table__item table__value">{{ (data.Additional_elements_fence.active_parametrs.type_filling.width).toLocaleString() }}</div>
                    <div class="table__item table__weight">
                        <span>
                            {{ Math.round(data.Additional_elements_fence.active_parametrs.type_filling.width * (Price.PBB.weight )) }}
                        </span> Кг
                    </div>
                    <div class="table__item table__value table__price">
                        <span>{{ Math.round((data.Additional_elements_fence.active_parametrs.type_filling.width) * Price.PBB.cost).toLocaleString() }}</span>
                        Руб</div>
                </div>
                <div class="table__row">
                    <div class="table__item table__title">{{ Price.nasadka_L.title }}</div>
                    <div class="table__item table__value">{{ Price.nasadka_L.cost.toLocaleString() }} Руб</div>
                    <div class="table__item table__value">{{ (Price.panel.count *2).toLocaleString() }}</div>
                    <div class="table__item table__value table__price">
                        <span>
                            {{ Math.round((Price.panel.count *2) * Price.nasadka_L.cost).toLocaleString() }}
                        </span> 
                    Руб</div>
                </div>
            </div>

            <!-- калитки начало -->
            <!-- пример вывода данных, тип клаитки и индекс ширины из data
                {{ Price.kalitki.getWickets('smart',data.Wickets.active_parametrs.opening_width_smart).cost }} -->

            {{ data.Wickets.height[data.Wickets.active_parametrs.height] }} 
            <div class="table__row" v-if="data.Wickets.active_parametrs.smart != 0">
                <div class="table__item table__title">
                    {{ Price.kalitki.smart.title  }}  
                    {{ data.Wickets.height.values[data.Wickets.active_parametrs.height] }} 
                    x {{ data.Wickets.opening_width_smart.values[data.Wickets.active_parametrs.opening_width_smart] }}
                
                </div>
                <div class="table__item table__value">{{ Price.kalitki.getWickets('smart',data.Wickets.active_parametrs.opening_width_smart).cost.toLocaleString() }} Руб</div>
                <div class="table__item table__value">{{ data.Wickets.active_parametrs.smart.toLocaleString() }}</div>
                <div class="table__item table__weight">
               
                    <span>
                        {{ Math.round(data.Wickets.active_parametrs.smart * Price.kalitki.getWickets('smart',data.Wickets.active_parametrs.opening_width_smart).weight ) }}
                    </span> 
                    кг
                </div>
                <div class="table__item table__value table__price">
                    <span>{{ Math.round((data.Wickets.active_parametrs.smart * Price.kalitki.getWickets('smart',data.Wickets.active_parametrs.opening_width_smart).cost)).toLocaleString() }}</span>
                    Руб</div>
            </div>

            <div class="table__row" v-if="data.Wickets.active_parametrs.bars != 0">
                <div class="table__item table__title">
                    {{ Price.kalitki.bars.title  }}  
                    {{ data.Wickets.height.values[data.Wickets.active_parametrs.height] }} 
                    x {{ data.Wickets.opening_width_bars.values[data.Wickets.active_parametrs.opening_width_bars] }} GN
                </div>
                <div class="table__item table__value">{{ Price.kalitki.getWickets('bars',data.Wickets.active_parametrs.opening_width_bars).cost.toLocaleString() }} Руб</div>
                <div class="table__item table__value">{{ data.Wickets.active_parametrs.bars.toLocaleString() }}</div>
                <div class="table__item table__weight">
                    <span>
                        {{ Math.round(data.Wickets.active_parametrs.bars * Price.kalitki.getWickets('bars',data.Wickets.active_parametrs.opening_width_bars).weight) }}
                    </span> 
                    Кг
                </div>
                <div class="table__item table__value table__price">
                    <span>
                        {{ Math.round(Price.kalitki.getWickets('bars',data.Wickets.active_parametrs.opening_width_bars).cost * data.Wickets.active_parametrs.bars).toLocaleString() }}
                    </span> 
                    Руб</div>
            </div>
            <div class="table__row" v-if="data.Wickets.active_parametrs.fance != 0">
                <div class="table__item table__title">
                    {{ Price.kalitki.fence.title  }}  
                    {{ data.Wickets.height.values[data.Wickets.active_parametrs.height] }} 
                    x {{ data.Wickets.opening_width_fance.values[data.Wickets.active_parametrs.opening_width_fance] }} GN
                </div>
                <div class="table__item table__value">{{ Price.kalitki.getWickets('fence',data.Wickets.active_parametrs.opening_width_fance).cost.toLocaleString() }} Руб</div>
                <div class="table__item table__value">{{ data.Wickets.active_parametrs.fance.toLocaleString() }}</div>
                <div class="table__item table__weight">
                    <span>
                        {{ Math.round(data.Wickets.active_parametrs.fance * Price.kalitki.getWickets('fence',data.Wickets.active_parametrs.opening_width_fance).weight) }}
                    </span> 
                    кг
                </div>
                <div class="table__item table__value table__price">
                    <span>{{ Math.round(Price.kalitki.getWickets('fence',data.Wickets.active_parametrs.opening_width_fance).cost * data.Wickets.active_parametrs.fance).toLocaleString() }}</span>
                    Руб
                </div>       
            </div> 
        
            <!-- калитки конец -->

            <!-- распашные и разздвижные ворота начало -->
           <!-- fasd {{ Price.gates.getGates('swing_gates','smart',1) }} -->
             <div class="table__row" v-if="data.Gates.active_parametrs.swing_smart != 0">
                <div class="table__item table__title">
                    {{ Price.gates.swing_gates.title }}   {{ Price.gates.swing_gates.smart.title }}  
                    {{ data.Gates.height.values[data.Gates.active_parametrs.height] }} 
                    x {{ data.Gates.opening_width_swing.values[data.Gates.active_parametrs.swing_width] }} GN
                </div>
                <div class="table__item table__value">{{ Price.gates.getGates('swing_gates','smart',data.Gates.active_parametrs.swing_width).cost.toLocaleString() }} Руб</div>
                <div class="table__item table__value">{{ data.Gates.active_parametrs.swing_smart.toLocaleString() }}</div>
                <div class="table__item table__weight">
                    <span>
                        {{ Math.round(data.Gates.active_parametrs.swing_smart * Price.gates.getGates('swing_gates','smart',data.Gates.active_parametrs.swing_width).weight ) }} 
                    </span> 
                    кг
                </div>
                <div class="table__item table__value table__price">
                    <span>{{ Math.round(Price.gates.getGates('swing_gates','smart',data.Gates.active_parametrs.swing_width).cost * data.Gates.active_parametrs.swing_smart).toLocaleString() }}</span>
                    Руб</div>
            </div>
           
            <div class="table__row" v-if="data.Gates.active_parametrs.swing_bars != 0">
                <div class="table__item table__title">
                    {{ Price.gates.swing_gates.title }}   {{ Price.gates.swing_gates.bars.title }} 
                    {{ data.Gates.height.values[data.Gates.active_parametrs.height] }} 
                    x {{ data.Gates.opening_width_swing.values[data.Gates.active_parametrs.swing_width] }} GN
                </div>
                <div class="table__item table__value">{{ Price.gates.getGates('swing_gates','bars',data.Gates.active_parametrs.swing_width).cost.toLocaleString() }} Руб</div>
                <div class="table__item table__value">{{ data.Gates.active_parametrs.swing_bars.toLocaleString() }}</div>
                <div class="table__item table__weight">
                    <span>
                        {{ Math.round(data.Gates.active_parametrs.swing_bars * Price.gates.getGates('swing_gates','bars',data.Gates.active_parametrs.swing_width).weight) }} 
                    </span> 
                    кг
                </div>
                <div class="table__item table__value table__price">
                    <span>{{ Math.round(Price.gates.getGates('swing_gates','bars',data.Gates.active_parametrs.swing_width).cost * data.Gates.active_parametrs.swing_bars).toLocaleString() }}</span>
                    Руб</div>       
            </div> 
            
            
            <div class="table__row" v-if="data.Gates.active_parametrs.swing_fance != 0">
                <div class="table__item table__title">
                    {{ Price.gates.swing_gates.title }}   {{ Price.gates.swing_gates.fance.title }} 
                    {{ data.Gates.height.values[data.Gates.active_parametrs.height] }} 
                    x {{ data.Gates.opening_width_swing.values[data.Gates.active_parametrs.swing_width] }} GN
                </div>
                <div class="table__item table__value">{{ Price.gates.getGates('swing_gates','fance',data.Gates.active_parametrs.swing_width).cost.toLocaleString() }} Руб</div>
                <div class="table__item table__value">{{ data.Gates.active_parametrs.swing_fance.toLocaleString() }}</div>
                <div class="table__item table__weight">
                    <span>
                        {{ Math.round(data.Gates.active_parametrs.swing_fance * Price.gates.getGates('swing_gates','fance',data.Gates.active_parametrs.swing_width).weight) }} 
                    </span> 
                    кг
                </div>
                <div class="table__item table__value table__price">
                    <span>
                        {{ Math.round(Price.gates.getGates('swing_gates','fance',data.Gates.active_parametrs.swing_width).cost * data.Gates.active_parametrs.swing_fance).toLocaleString() }}
                    </span> 
                Руб</div>       
            </div>  


            <div class="table__row" v-if="data.Gates.active_parametrs.sliding_smart != 0">
                <div class="table__item table__title">
                    {{ Price.gates.sliding_gates.title }}   {{ Price.gates.sliding_gates.smart.title }}  
                    {{ data.Gates.height.values[data.Gates.active_parametrs.height] }} 
                    x {{ data.Gates.opening_width_sliding.values[data.Gates.active_parametrs.sliding_width] }} GN
                </div>
                <div class="table__item table__value">{{ Price.gates.getGates('sliding_gates','smart',data.Gates.active_parametrs.sliding_width).cost.toLocaleString() }} Руб</div>
                <div class="table__item table__value">{{ data.Gates.active_parametrs.sliding_smart.toLocaleString() }}</div>
                <div class="table__item table__weight">
                    <span>
                        {{ Math.round(data.Gates.active_parametrs.sliding_smart * Price.gates.getGates('sliding_gates','smart',data.Gates.active_parametrs.sliding_width).weight) }} 
                    </span> 
                     кг
                </div>
                <div class="table__item table__value table__price">
                    <span>{{ Math.round( Price.gates.getGates('sliding_gates','smart',data.Gates.active_parametrs.sliding_width).cost * data.Gates.active_parametrs.sliding_smart).toLocaleString() }}</span> 
                    Руб
                </div>

            </div>  

            <div class="table__row" v-if="data.Gates.active_parametrs.sliding_bars != 0">
                <div class="table__item table__title">
                    {{ Price.gates.sliding_gates.title }}   {{ Price.gates.sliding_gates.bars.title }}  
                    {{ data.Gates.height.values[data.Gates.active_parametrs.height] }} 
                    x {{ data.Gates.opening_width_sliding.values[data.Gates.active_parametrs.sliding_width] }} GN
                </div>
                <div class="table__item table__value">{{ Price.gates.getGates('sliding_gates','bars',data.Gates.active_parametrs.sliding_width).weight.toLocaleString() }} Руб</div>
                <div class="table__item table__value">{{ data.Gates.active_parametrs.sliding_bars.toLocaleString() }}</div>
                <div class="table__item table__weight">
                    <span>
                        {{ Math.round(data.Gates.active_parametrs.sliding_bars * Price.gates.getGates('sliding_gates','bars',data.Gates.active_parametrs.sliding_width).weight) }} 
                    </span> 
                     кг
                </div>
                <div class="table__item table__value table__price">
                    <span>{{ Math.round(Price.gates.getGates('sliding_gates','bars',data.Gates.active_parametrs.sliding_width).cost * data.Gates.active_parametrs.sliding_bars).toLocaleString() }}</span>
                    Руб</div>
            </div>

            <div class="table__row" v-if="data.Gates.active_parametrs.sliding_fance != 0">
                <div class="table__item table__title">
                    {{ Price.gates.sliding_gates.title }}   {{ Price.gates.sliding_gates.fance.title }}  
                    {{ data.Gates.height.values[data.Gates.active_parametrs.height] }} 
                    x {{ data.Gates.opening_width_sliding.values[data.Gates.active_parametrs.sliding_width] }} GN
                </div>
                <div class="table__item table__value"> {{ Price.gates.getGates('sliding_gates','fance',data.Gates.active_parametrs.sliding_width).cost.toLocaleString() }} Руб</div>
                <div class="table__item table__value">{{ data.Gates.active_parametrs.sliding_fance.toLocaleString() }}</div>
                <div class="table__item table__weight">
                    <span>
                        {{ Math.round(data.Gates.active_parametrs.sliding_fance * Price.gates.getGates('sliding_gates','fance',data.Gates.active_parametrs.sliding_width).weight) }} 
                    </span> 
                     кг
                </div>
                <div class="table__item table__value table__price">
                    <span>{{ Math.round(Price.gates.getGates('sliding_gates','fance',data.Gates.active_parametrs.sliding_width).cost * data.Gates.active_parametrs.sliding_fance).toLocaleString() }}</span>
                    Руб</div>
            </div>
            <!-- распашные и разздвижные ворота конец -->


        </div>
    </div>
</template>
<script>
export default {
    data() {    
        return {
           loader: true,
           scoba: {},
        //    Post: {},
           Fance_tach: {},
        //    PostWeight: {}
        }
    },
    mounted() {
        // this.getPost()
        // this.getPostWeight();

        let _this = this;
        setTimeout(()=>{
            _this.$store.dispatch('init_statistiks', _this);
            _this.$store.dispatch('init_weight', _this);  
        },200)
    },
    computed: {
        data() {
            return this.$store.getters.Data_calc;
        },
        Price() {
            return this.$store.getters.Price;
        },
        Weight () {
            return this.$store.getters.Weight;
        },
        Statisticks () {
            return this.$store.getters.Statisticks;
        },
    },
    methods: {
        // все метобы представленные тут сокращают длинну путей потму что 
        // цены у скоб и столбов в вложенные в друг друга массивах и пути к данным выходя солжно читаемые и длинные
        // на вход идут индексы по массивам возвращаемые значение это уже найденные обьекты
        
        // если в массиве cost будет с 0 
        // то значит что выборка произошла с ошибкой и элемент не выведеться на панель

        getScoba() {
            this.Scoba = this.Price.scoba.getData(
                this.data.version_pillar.active_parametrs.type_post_index, 
                this.data.version_pillar.active_parametrs.sechenie_pillar
            )
        },

    },

}
</script>
<style scoped>
    .table {
        max-width: 1200px;
        margin: 0 auto;
        margin-top: 2rem;
        font-size: 13px;
        padding: 0 2rem;
    }
    .table__Btitle {
        text-transform: uppercase;
        font-size: 24px;
        font-weight: 700;margin-top: 3rem;
    }
    .table__head, .table__row {
        display: grid;
        grid-template-columns: 1fr 150px 150px 200px;
    }
    .table__head div {
        color: var(--white);
        padding: 1.5rem 1rem;
    }
    .table__head--title {
       justify-content: flex-start!important;
    } 
    
    .table__hIcon {
        font-size: 1.2rem;
        margin-right: .5rem;
        margin-right: .5rem;
        background-size: contain !important;
        background-repeat: no-repeat;
        background-position: center;
        display: block;
    }
    .table__content {
        font-size: 15px;
    }
    .table__content .table__row, .table__content .table__item {
        border: 1px solid var( --accent3);
        border-top: 0;
    }
    .dark-blue {
        background-color: var(--tiker);
    }
    .light-blue {
        background-color: var(--tiker);
    }
    .table__row {

    }
    .table__item {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .table__title {
        padding: 25px;
        justify-content: flex-start;
    }
    .table__value {
        padding: 25px;
    }
    .table__weight {
        display: none;   
    }
    .table__price span {
        margin-right: 5px;
    }
    @media screen and (max-width: 768px) {
        .table__hIcon{ 
            display: none;
        }
        .table {
            overflow-x: scroll;
        }
        .table__content, .table__head {
            width: 740px;
        }
    }
</style>