<?php include_once dirname(__FILE__) . '../../../html-templates/header.php'; ?>
<content-view>
    <view-header>
        <back-btn><double-arrow-left>&nbsp;</double-arrow-left><span>Повернутись</span></back-btn><title-block class="width_100_percent">Додавання елемента до BST без балансування</title-block>
    </view-header>
    <view-row>
        <data-structure>
            <title-block class="width_100_percent"><arrow-down>&nbsp;</arrow-down><span>Додавання елемента до BST без балансування</span></title-block>
            <active-field>
<p>Елементи:
    <item class="init">0</item>
    <item class="init">1</item>
</p>
            </active-field>
        </data-structure>
        <right-block>
            <comments-block>
                <title-block class="width_100_percent">Коментар до коду</title-block>  
                <active-field>

                </active-field>  
                <audio class="audio-comment" controls>
                    <source id="mp3_src" src="" type="audio/mpeg">
                    <source id="ogg_src" src="" type="audio/ogg">
                    Браузер не підтримує програвання звукових файлів!
                </audio>
            </comments-block>
        </right-block>
    </view-row>
    <view-row>
        
        <data-pseudocode>
            <title-block class="width_100_percent"><arrow-down>&nbsp;</arrow-down><span>Виконувана процедура&nbsp;::&nbsp;<span class="js_procedure_name red"></span></span></title-block>
            <active-field>

            </active-field>
        </data-pseudocode>
        <right-block>
            <procedures-block>
                <title-block class="width_100_percent">Процедури</title-block>  
                <active-field>

                </active-field>  
            </procedures-block>
        </right-block>
    </view-row>
    <view-row>
        <help-btn><help-btn-icon>&nbsp;</help-btn-icon><span>Довідка</span></help-btn>  
        <control-btn class="start"><span>Старт</span><control-icon>&nbsp;</control-icon></control-btn>  
        <control-btn class="back"><control-icon>&nbsp;</control-icon><span>назад</span></control-btn>  
        <control-btn class="pause"><span>ПАУЗА</span><control-icon>&nbsp;</control-icon></control-btn>  
        <control-btn class="forward"><span>вперед</span><control-icon>&nbsp;</control-icon></control-btn> 
        <control-btn class="stop"><span>СТОП</span><control-icon>&nbsp;</control-icon></control-btn> 
    </view-row>
    <?php
    include_once dirname(__FILE__) . '../../../html-templates/software-info.php';
    ?>
</content-view>
<script src="js/scenario.js" defer></script>
<script src="js/ready.js" defer></script>
<?php

include_once dirname(__FILE__) . '../../../html-templates/footer.php';
